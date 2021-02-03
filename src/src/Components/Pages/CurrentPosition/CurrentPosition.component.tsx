import React, { useEffect } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import '../../../Theme/sweetalert2/sweetalert2.scss';
import { Redirect } from 'react-router';
import { ResponsivePie } from '@nivo/pie';
import Swal from 'sweetalert2';
import { State } from '../../../Redux/root-reducer';
import {
  fetchTaxReportsRequest,
} from '../../../Redux/Services/TaxReports/TaxReports.actions';
import Spinner from '../../Components/Spinner/spinner.component';
import { multinesErrorToHtml } from '../../../Redux/Services/Api.utils';
import LabelStocks from '../../Components/LabelStocks/LabelStocks.component';
import { extractDataToChart, getTotalPrice } from './CurrentPosition.utils';
import {
  Main, Title, Table, TotalDiv, NoCurrentPositionMessage,
} from './CurrentPosition.styles';

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

function CurrentPosition({
  taxReport, isFetching, error, spreadsheetAdm,
}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (taxReport === undefined) {
      dispatch(fetchTaxReportsRequest(spreadsheetAdm));
    }
  }, [dispatch, taxReport, spreadsheetAdm]);

  if (isFetching) {
    return <Spinner />;
  }

  if (error?.httpStatusCode === 401) {
    return <Redirect to="/Logout/" />;
  }

  if (error !== undefined) {
    Swal.fire({
      icon: 'error',
      title: 'Um erro ocorreu durante o cálculo da sua posição atual',
      html: multinesErrorToHtml(error.errorMessage),
    });
  }

  const { data, totalValueChart, isShortChart } = extractDataToChart(taxReport?.currentPositions);

  return (
    <>
      <Title>Meus Ativos</Title>
      <Main>

        {taxReport && data && (
          <>
            <TotalDiv>
              <p>
                Total:
                {' '}
                {getTotalPrice(taxReport.currentPositions)
                  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </p>
            </TotalDiv>

            <div className="pieChart">
              <ResponsivePie
                data={data}
                margin={{
                  top: 20, right: 80, bottom: 40, left: 80,
                }}
                innerRadius={0.5}
                padAngle={0.7}
                enableRadialLabels
                enableSliceLabels
                isInteractive
                cornerRadius={3}
                colors={{ datum: 'data.color' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="#fff"
                radialLabelsLinkColor={{ from: 'color' }}
                radialLabelsLinkStrokeWidth={4}
                radialLabel={(e) => (isShortChart ? (-1 * e.value) : (e.value))
                  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="#000"
                sliceLabel={(e) => `${((e.value / totalValueChart) * 100).toFixed(2).replace('.', ',')}%`}
                legends={[
                  {
                    anchor: 'top-left',
                    direction: 'column',
                    itemDirection: 'left-to-right',
                    justify: false,
                    translateX: 100,
                    translateY: -20,
                    itemsSpacing: 10,
                    itemWidth: 100,
                    itemHeight: 25,
                    itemOpacity: 0.80,
                    symbolSize: 20,
                    symbolShape: 'circle',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
                theme={{
                  fontSize: 17,
                  legends: { text: { fill: '#fff' } },
                }}
              />
            </div>

            <Table>
              <table>
                <thead>
                  <tr>
                    <th className="leftAlign">Ticker</th>
                    <th className="rightAlign">Quantidade</th>
                    <th className="rightAlign">Preço Médio</th>
                    <th className="leftAlign">Tipo</th>
                  </tr>
                </thead>

                <tbody>
                  {taxReport?.currentPositions.map((position) => (
                    <tr key={position.ticker}>
                      <td className="leftAlign">{position.ticker}</td>
                      <td className="rightAlign">{position.quantity}</td>
                      <td className="rightAlign">
                        R$
                        {' '}
                        {(Math.round(position.avgCost * 100) / 100).toFixed(2).replace('.', ',')}
                      </td>
                      <td className="leftAlign"><LabelStocks title={position.type} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Table>
          </>
        )}
        {!data && (
          <NoCurrentPositionMessage>
            Você não possui ativos no momento.
          </NoCurrentPositionMessage>
        )}
      </Main>
    </>
  );
}
export default connector(CurrentPosition);
