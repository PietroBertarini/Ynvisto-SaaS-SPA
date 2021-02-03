import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import '../../../Theme/sweetalert2/sweetalert2.scss';
import { useHistory, useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import { State } from '../../../Redux/root-reducer';
import TaxDetailsModal from '../../Components/TaxDetailsModal/TaxDetailsModal.component';
import ScrollTabs from '../../Components/ScrollTabs/ScrollTabs.component';
import {
  fetchTaxReportsRequest,
} from '../../../Redux/Services/TaxReports/TaxReports.actions';
import Spinner from '../../Components/Spinner/spinner.component';
import {
  getExemptionSaleVolumeUsedInfo, getExemptionSaleVolumeUsedTitleInfo,
  getMonthNumber, getMonthlyReport,
  getProfitData,
  getProfitHeaderValue,
  getExemptionTitleStatus,
  getTaxData,
  getTaxHeaderValue, getProfitTitleStatus, getTaxesTitleStatus,
  handleClickDarf, deleteDarf, markDarfAsPaid, parseOperationsHistory,
} from './MonthlyTaxReport.utils';
import MonthlyCardReport from '../../Components/MonthlyCardReport/MonthlyCardReport.component';
import { allTabs } from '../TaxReport/TaxReport.utils';
import { getTaxDetailsInfo } from '../../Components/MonthlyCardReport/MonthlyCardReport.utils';
import YnvistoButton, { EButtonColor } from '../../Components/YnvistoButton/YnvistoButton.component';
import History from '../../Components/History/History.component';
import { useStyles } from './MonthlyTaxReport.styles';

/**
 * Get the stores states that TaxComponents uses and observe.
 * @param state: the stored stated of the Ynvisto.
 */
const mapStateToProps = (state: State) => ({
  taxReport: state.taxReports.taxReport,
  isFetching: state.taxReports.isFetchingReport,
  spreadsheetAdm: state.authorization.spreadsheetAdmin,
  error: state.taxReports.error,
  user: state.authorization.user,
  irpf: state.irpf.assetsRights,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function MonthlyTaxReport(props: Props) {
  const dispatch = useDispatch();
  const {
    taxReport, isFetching, error, spreadsheetAdm, user, irpf,
  } = props;
  console.log(irpf);
  const classes = useStyles();

  const { month: navBarMonth } = useParams < { month: string }>();
  const history = useHistory();
  const navBarMonthNumber = getMonthNumber(navBarMonth);

  const monthlyTaxReport = getMonthlyReport(navBarMonthNumber, taxReport);
  const currentDate = new Date();

  const [markingDarf, setMarkingDarf] = useState(false);

  const historyData = parseOperationsHistory(taxReport?.operations, navBarMonthNumber);

  useEffect(() => {
    if (taxReport === undefined) {
      dispatch(fetchTaxReportsRequest(spreadsheetAdm));
    }

    return () => {
      // Clean previously data for fetch again yhe most updated tax report data.
      // dispatch(taxReportCleanData());
    };
  }, [dispatch, taxReport, spreadsheetAdm]);

  const monthIndex = monthlyTaxReport?.monthIndex ?? -1;
  const year = monthlyTaxReport?.year ?? -1;
  const darfId = monthlyTaxReport?.darfPaymentId ?? 0;

  const payDarf = useCallback(async () => {
    if (markingDarf) {
      return; // Noop while the DARF request is loading
    }

    if (!monthlyTaxReport) {
      console.warn('Cannot confirm darf payment for an empty report');
      return;
    }

    // Starts the loader
    setMarkingDarf(true);

    await markDarfAsPaid(monthIndex, year, dispatch);

    setMarkingDarf(false);
  }, [markingDarf, monthlyTaxReport, monthIndex, year, dispatch]);

  const deleteDarfCallback = useCallback(async () => {
    if (markingDarf) {
      return; // Noop while the DARF request is loading
    }

    if (darfId === 0) {
      console.warn('Cannot delete nonexistent darf payment');
      return;
    }

    // Start the loader
    setMarkingDarf(true);

    await deleteDarf(monthIndex, year, darfId, dispatch);

    setMarkingDarf(false);
  }, [darfId, dispatch, markingDarf, monthIndex, year]);

  if (isFetching) {
    return <Spinner />;
  }

  // if user put a month that doesn't exist, go back to Tax Report Page
  if (navBarMonthNumber === 0) {
    history.push('/Lucros/');
  }

  // TODO: Find a way to make this check standard across all API Calls, just like the error building and checking is
  if (error?.httpStatusCode === 401) {
    return <Redirect to="/Logout/" />;
  }

  const monthlyTaxReportDetails = getTaxDetailsInfo(monthlyTaxReport);
  const exemptionSaleVolumeUsedData = getExemptionSaleVolumeUsedInfo(monthlyTaxReport);
  const taxData = getTaxData(monthlyTaxReport);
  const profitData = getProfitData(monthlyTaxReport);
  const exemptionSaleVolumeUsedHeader = getExemptionSaleVolumeUsedTitleInfo(monthlyTaxReport);
  const taxHeader = getTaxHeaderValue(monthlyTaxReport);
  const profitHeader = getProfitHeaderValue(monthlyTaxReport);

  const renderButtonsSection = () => {
    if (!monthlyTaxReport) {
      return null;
    }

    const darfPayable = monthlyTaxReport.darfPayableTaxes;
    const hasDarf = navBarMonthNumber < (currentDate.getMonth() + 1) && darfPayable > 0;
    if (!hasDarf) {
      return null;
    }

    const { darfPaymentId } = monthlyTaxReport;
    const darfButton = darfPaymentId
      ? (
        <YnvistoButton
          status={EButtonColor.DANGER}
          title="Remover pagamento de DARF"
          onClick={deleteDarfCallback}
          isLoading={markingDarf}
        />
      )
      : (
        <YnvistoButton
          title="Confirmar pagamento de DARF"
          onClick={payDarf}
          isLoading={markingDarf}
        />
      );

    return (
      <div className={classes.buttons}>
        {darfButton}
        <YnvistoButton
          title="Gerar DARF"
          onClick={() => handleClickDarf(navBarMonthNumber, darfPayable, user?.userName)}
        />
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.header}>
        Apuração de Lucros
      </Typography>
      <ScrollTabs initialTabValue={navBarMonthNumber} tabsLabel={allTabs} />
      {renderButtonsSection()}
      <Grid container item xs={12} spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <MonthlyCardReport
            status={getExemptionTitleStatus(exemptionSaleVolumeUsedHeader)}
            title="Volume isento em operações comuns"
            headerMonetaryValue={exemptionSaleVolumeUsedHeader}
            data={exemptionSaleVolumeUsedData}
          />
        </Grid>
        <Grid item xs={4}>
          <MonthlyCardReport
            status={getTaxesTitleStatus(taxHeader)}
            title="Imposto a pagar"
            headerMonetaryValue={taxHeader}
            data={taxData}
            detailsModal={<TaxDetailsModal data={monthlyTaxReportDetails} />}
          />
        </Grid>
        <Grid item xs={4}>
          <MonthlyCardReport
            status={getProfitTitleStatus(profitHeader)}
            title={profitHeader >= 0 ? 'Lucro do mês' : 'Prejuízo do mês'}
            headerMonetaryValue={profitHeader}
            data={profitData}
          />
        </Grid>
      </Grid>
      <Typography variant="body1" className={classes.obs}>
        Obs: Impostos de Criptomoedas e Direito de subscriçaão não são
        incluidos na DARF segundo a Receita Federal, devem ser pagas no GCAP
      </Typography>
      <Typography className={classes.subheader}>
        Histórico de operações com lucro ou prejuízo em
        {' '}
        {navBarMonth}
      </Typography>
      {historyData.length !== 0
        ? <History data={historyData} />
        : (
          <Typography variant="body1" className={classes.message}>
            Você não possui operações com lucro ou prejuízo esse mês.
          </Typography>
        )}
    </div>
  );
}
export default connector(MonthlyTaxReport);
