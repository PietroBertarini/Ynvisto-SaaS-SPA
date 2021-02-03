import React from 'react';
import { ModalDetails } from './TaxDetailModal.styles';
import { ITaxdDetailInfo } from '../MonthlyCardReport/MonthlyCardReport.utils';

interface OwnProps {
  data: ITaxdDetailInfo,
}

export default function TaxDetailsModal(props: OwnProps) {
  const { data } = props;

  return (
    <ModalDetails>
      <h1>Detalhamento</h1>

      {data.commonOps && (
      <div className="operationType">
        <h2>Operações Comuns</h2>
        <div className="taxes">
          <p>Venda total do mês</p>
          <p>
            {data.commonOps.totalSell.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="taxes">
          <p>Resultado do mês</p>
          <p>
            {(data.commonOps.monthProfit >= 0) && '+'}
            {data.commonOps.monthProfit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="taxes">
          <p>Lucro tributável</p>
          <p>
            +
            {data.commonOps.taxableProfit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="taxes">
          <p>Prejuízo a compensar</p>
          <p>
            -
            {data.commonOps.compensatedLoss.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="line" />
        <div className="taxes">
          <p>Base de Cálculo</p>
          <p>
            =
            {data.commonOps.calcBase.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="result">
          <p>Imposto devido</p>
          <p>
            =
            {data.commonOps.taxDue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </div>
      )}

      {data.dayTrade && (
      <div className="operationType">
        <h2>Day Trade</h2>
        <div className="taxes">
          <p>Resultado do mês</p>
          <p>
            {(data.dayTrade.taxableProfit >= 0) && '+'}
            {data.dayTrade.taxableProfit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="taxes">
          <p>Prejuízo a compensar</p>
          <p>
            -
            {data.dayTrade.compensatedLoss.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="line" />
        <div className="taxes">
          <p>Base de Cálculo</p>
          <p>
            =
            {data.dayTrade.calcBase.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="result">
          <p>Imposto devido</p>
          <p>
            =
            {data.dayTrade.taxDue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </div>
      )}

      {data.fii && (
      <div className="operationType">
        <h2>FII</h2>
        <div className="taxes">
          <p>Resultado Líquido</p>
          <p>
            {(data.fii.liquidResult >= 0) && '+'}
            {data.fii.liquidResult.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="taxes">
          <p>Prejuízo a compensar</p>
          <p>
            -
            {data.fii.compensatedLoss.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="line" />
        <div className="taxes">
          <p>Base de Cálculo</p>
          <p>
            =
            {data.fii.calcBase.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="result">
          <p>Imposto devido</p>
          <p>
            =
            {data.fii.taxDue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </div>
      )}

      {data.finalResults && (
      <div className="operationType">
        <h2>Resultados Finais</h2>
        <div className="taxes">
          <p>Imposto Operação Comum</p>
          <p>
            +
            {data.finalResults.commonOpTax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="taxes">
          <p>Imposto Day Trade</p>
          <p>
            +
            {data.finalResults.daytradeTax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="taxes">
          <p>Imposto retido na fonte</p>
          <p>
            -
            {data.finalResults.withholdingTax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="line" />
        <div className="taxes">
          <p>Imposto Total da Bolsa</p>
          <p>
            =
            {data.finalResults.totalTax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="taxes">
          <p>Imposto FII</p>
          <p>
            +
            {data.finalResults.fiiTax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="taxes">
          <p>DARFs pendentes</p>
          <p>
            +
            {data.finalResults.previousDarf.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
        <div className="result">
          <p>Imposto a pagar</p>
          <p>
            =
            {data.finalResults.payableTax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </div>
      )}
    </ModalDetails>
  );
}
