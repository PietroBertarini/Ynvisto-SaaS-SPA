import React from 'react';
import { format } from 'date-fns';
import ColorfulCircle from '../ColorfulCircle/ColorfulCircle.component';
import YnvistoCard from '../YnvistoCard/YnvistoCard.component';
import { extractPercentageToCircle, HistoryProp, getType } from './History.utils';
import {
  Main, TimeLine, TimeBlock, InnerCard,
} from './History.styles';

const History = ({ data }: HistoryProp) => (
  <Main>
    {data && data.map((timeBlock) => (
      <TimeBlock key={timeBlock.date}>
        <div className="dateLine">
          <ColorfulCircle
            firstColor="#05E985"
            lastColor="#EB5050"
            percentage={extractPercentageToCircle(timeBlock.operations)}
          />
          <p>{format(new Date(timeBlock.date), 'dd/MM/yyyy')}</p>
        </div>
        <TimeLine>
          <div className="cards">
            {timeBlock.operations.map((operation) => (
              <YnvistoCard key={operation.volume} color={operation.profit < 0 ? '#8C2F2F' : '#029B58'}>
                <InnerCard color={operation.profit < 0 ? '#EB5050' : '#05E985'}>
                  <h2>
                    {operation.operationType === 'Purchase' ? 'Compra' : 'Venda'}
                    {' '}
                    de
                    {' '}
                    {operation.ticker}
                    {' '}
                    :
                    {' '}
                    {getType(operation.assetType, operation.isDayTrade)}
                  </h2>
                  <div className="infoCard">
                    <div className="infoLarge">
                      <h5>Total:</h5>
                      <p>{operation.volume.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                    <div className="info">
                      <h5>Preço:</h5>
                      <p>{operation.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                    <div className="info">
                      <h5>Unidades:</h5>
                      <p>{operation.quantity}</p>
                    </div>
                    <div className="info">
                      <h5>{operation.isDayTrade ? 'Preço de Compra:' : 'Preço Médio:'}</h5>
                      <p>{operation.avgCost.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                    <div className="infoLarge">
                      <h5>Lucro:</h5>
                      <p>{operation.profit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                  </div>
                </InnerCard>
              </YnvistoCard>
            ))}
          </div>
        </TimeLine>
      </TimeBlock>
    ))}
  </Main>
);

export default History;
