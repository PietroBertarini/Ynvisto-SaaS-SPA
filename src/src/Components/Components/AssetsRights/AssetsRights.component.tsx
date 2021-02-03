import React, {
  useCallback, useState, memo, useEffect,
} from 'react';
import { Tooltip, withStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { IAssetsRights } from '../../../Redux/Services/IRPF/IRPF.api';
import {
  MainDiv, Title, List,
} from './AssetsRights.styles';

interface Props {
  assetsRights: IAssetsRights[],
}

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#000',
    color: '#FFF',
    fontSize: 18,
  },
  arrow: {
    color: '#000',
  },
}))(Tooltip);

const AssetsRights = ({ assetsRights }: Props) => {
  let st20 = 0;
  let st21 = 0;

  if (assetsRights.length > 0) {
    assetsRights.forEach((item) => {
      st20 += item.situation20;
      st21 += item.situation21;
    });
  }

  const [situation20, setSituation20] = useState(st20);
  const [situation21, setSituation21] = useState(st21);

  useEffect(() => {
    setSituation20(st20);
    setSituation21(st21);
  }, [st20, st21]);

  let counter = 0;

  const copyToClipboard = useCallback((value: string) => {
    // Creates a dummy element, so we can copy it's value to clipboard
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = value;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }, []);

  return (
    <MainDiv>
      <Title>
        <div className="values">
          <div className="totalItens">
            <strong>
              {assetsRights && (assetsRights.length < 10 ? `0${assetsRights.length}` : assetsRights.length)}
              {!assetsRights && '00'}
            </strong>
            <p>Total de Itens</p>
          </div>
          <div className="valor2020">
            <strong>
              {situation20.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </strong>
            <p>Situação em 31/12/2020</p>
          </div>
          <div className="valor2021">
            <strong>
              {situation21.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </strong>
            <p>Situação em 31/12/2021</p>
          </div>
        </div>
      </Title>
      {assetsRights.length !== 0 && (
      <List>
        <div className="list">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th style={{ height: 58 }}> </th>
                  <th>Item</th>
                  <th style={{ width: 150 }}>Ticker</th>
                  <th>Código</th>
                  <th className="large">Localização</th>
                  <th className="largeRight">Situação 2020</th>
                  <th className="largeRight">Situação 2021</th>
                  <th>Discriminação</th>
                </tr>
              </thead>
              <tbody>
                {assetsRights
                  && assetsRights.map((item) => {
                    counter += 1;
                    return (
                      <tr key={counter}>
                        <td style={{
                          textAlign: 'left',
                          margin: 0,
                          padding: 0,
                          height: 58,
                          paddingTop: 10,
                          paddingLeft: 10,
                          marginLeft: 10,
                        }}
                        >
                          <CheckCircleOutlineIcon
                            style={{
                              fontSize: 35, color: '#999', margin: 0, padding: 0,
                            }}
                          />
                        </td>

                        <td>{counter < 10 ? `0${counter}` : counter}</td>
                        <td style={{ width: 150 }}>
                          <CustomTooltip
                            title="Copiar"
                            arrow
                            placement="top-start"
                            onClick={() => copyToClipboard(item.ticker)}
                          >
                            <div className="text">
                              {item.ticker}
                            </div>
                          </CustomTooltip>
                        </td>
                        <td>
                          <CustomTooltip
                            title="Copiar"
                            arrow
                            placement="top-start"
                            onClick={() => {
                              if (item.code < 10) copyToClipboard(`0${item.code}`);
                              else copyToClipboard(item.code.toString());
                            }}
                          >
                            <div className="text">
                              {item.code < 10 ? `0${item.code}` : item.code}
                            </div>
                          </CustomTooltip>
                        </td>
                        <td className="large">
                          <CustomTooltip
                            title="Copiar"
                            arrow
                            placement="top-start"
                            onClick={() => copyToClipboard(item.location)}
                          >
                            <div className="text">
                              {item.location}
                            </div>
                          </CustomTooltip>
                        </td>
                        <td className="largeRight">
                          <CustomTooltip
                            title="Copiar"
                            arrow
                            placement="top-end"
                            onClick={() => copyToClipboard(item.situation20
                              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))}
                          >
                            <div className="text">
                              {item.situation20.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                            </div>
                          </CustomTooltip>
                        </td>
                        <td className="largeRight">
                          <CustomTooltip
                            title="Copiar"
                            arrow
                            placement="top-end"
                            onClick={() => copyToClipboard(item.situation21
                              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))}
                          >
                            <div className="text">
                              {item.situation21.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                            </div>
                          </CustomTooltip>
                        </td>
                        <td>
                          {item.discrimitation ? (
                            <button
                              type="button"
                              onClick={() => copyToClipboard(item.discrimitation)}
                            >
                              Copiar
                            </button>
                          ) : (
                            <div className="empty" />
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </List>
      )}
    </MainDiv>
  );
};

export default memo(AssetsRights);
