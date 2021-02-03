import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import '../../../Theme/sweetalert2/sweetalert2.scss';
import { Redirect } from 'react-router-dom';
import { useStyles } from './TaxReport.styles';
import { State } from '../../../Redux/root-reducer';
import ProfitCalendar from '../../Components/ProfitCalendar/ProfitCalendar.component';
import ScrollTabs from '../../Components/ScrollTabs/ScrollTabs.component';
import Resume from '../../Components/Resume/Resume.component';
import ProfitActualMonth from '../../Components/ProfitActualMonth/ProfitActualMonth.component';
import ProfitCalendarLegend, {
  EColor,
  ILegendData,
} from '../../Components/ProfitCalendarLegend/ProfitCalendarLegend.component';
import { fetchTaxReportsRequest } from '../../../Redux/Services/TaxReports/TaxReports.actions';
import Spinner from '../../Components/Spinner/spinner.component';
import { allTabs, buildProfitCardsProps, getResumeInfo } from './TaxReport.utils';

export const calendarHelper : ILegendData[] = [
  {
    label: 'DARF Paga',
    color: EColor.BLUE,
  },
  {
    label: 'Não houve DARF',
    color: EColor.GREEN,
  },
  {
    label: 'DARF Pendente',
    color: EColor.YELLOW,
  },
  {
    label: 'DARF Atrasada',
    color: EColor.RED,
  },
  {
    label: 'Mês não finalizado',
    color: EColor.WHITE,
  },
];

/**
 * Get the stores states that TaxComponents uses and observe.
 * @param state: the stored stated of the Ynvisto.
 */
const mapStateToProps = (state: State) => ({
  taxReport: state.taxReports.taxReport,
  isFetching: state.taxReports.isFetchingReport,
  spreadsheetAdm: state.authorization.spreadsheetAdmin,
  error: state.taxReports.error,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function TaxReport(props: Props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    taxReport, isFetching, error, spreadsheetAdm,
  } = props;

  useEffect(() => {
    if (taxReport === undefined) {
      dispatch(fetchTaxReportsRequest(spreadsheetAdm));
    }
    return () => {
      // Clean previously data for fetch again yhe most updated tax report data.
      // dispatch(taxReportCleanData());
    };
  }, [dispatch, taxReport, spreadsheetAdm]);
  if (isFetching) {
    return <Spinner />;
  }

  // TODO: Find a way to make this check standard across all API Calls, just like the error building and checking is
  if (error?.httpStatusCode === 401) {
    return <Redirect to="/Logout/" />;
  }

  const actualMonth : number = new Date().getMonth();
  const profitCardsData = buildProfitCardsProps(taxReport?.monthlyReports);
  const resumeInfo = getResumeInfo(taxReport?.monthlyReports);
  return (
    <div className={classes.root}>
      <Typography className={classes.header}>
        Apuração de Lucros
      </Typography>
      <ScrollTabs initialTabValue={0} tabsLabel={allTabs} />
      <Resume allResumeInfo={resumeInfo} />
      <Typography className={classes.subTitle}>
        Mês Atual:
      </Typography>
      <ProfitActualMonth month={profitCardsData[actualMonth]} />
      <Typography className={classes.subTitle}>
        Todos os meses:
      </Typography>
      <ProfitCalendarLegend legendData={calendarHelper} />
      <ProfitCalendar monthArray={profitCardsData} />
    </div>
  );
}
export default connector(TaxReport);
