/* eslint-disable max-len */
import React from 'react';
import { DarfDiv } from './Darf.styles';
import brasil from '../../../Assets/Images/newdarf.png';

function Darf() {
  const search = window.location.search.substring(1);

  const {
    calcPeriod,
    darfValue,
    expireDate,
    name,
    cpf,
  } = JSON.parse(`{"${decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`);

  return (
    <DarfDiv>

      <title>Emissão de DARF - Ynvisto</title>

      <input type="hidden" name="ValidadeDaPagina" value="1" />
      <div align="left">
        <p><br /></p>
        <center>
          <table
            width="650"
            bordercolor="#000000"
            cellSpacing="0"
            bordercolordark="#000000"
            cellPadding="2"
            bordercolorlight="#000000"
            border="1"
          >
            <tbody>
              <tr>
                <td align="center" width="316" rowSpan="3">
                  <img
                    alt="brasil"
                    src={brasil}
                    border="0"
                    width="71"
                    height="77"
                    align="left"
                  />
                  <b>
                    <font
                      size="2"
                      color="#000000"
                      face="Verdana"
                    >
                      MINISTÉRIO DA FAZENDA
                      <br />
                      Secretaria da Receita Federal
                      <br />
                    </font>
                  </b
                  >
                  <font color="#000000" face="arial" size="1">
                    Documento de Arrecadação de Receitas Federais
                  </font
                  >
                  <b>
                    <font size="2" color="#000000" face="Verdana">
                      <br />
                    </font
                    >
                    <font color="#000000" face="Verdana" size="4"> DARF</font>
                  </b
                  >
                </td>
                <td colSpan="2" align="left" valign="top">
                  <font face="arial" size="1">
                    02 PERÍODO DE APURAÇÃO
                    <br />
                  </font>
                </td>
                <td align="right" width="128">
                  <font
                    face="tahoma"
                    size="1"
                  >
                    <br />
                    <b>{calcPeriod}</b>
                    {' '}
                    &nbsp;

                  </font
                  >
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="left" valign="top">
                  <font face="arial" size="1">
                    03 NÚMERO DO CPF / CNPJ
                    <br />
                  </font>
                </td>
                <td align="right" width="128">
                  <font
                    face="tahoma"
                    size="1"
                  >
                    <br />
                    <b>
                      {cpf.replace(/\D/g, '')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d)/, '$1.$2')
                        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                        .replace(/(-\d{2})\d+?$/, '$1')}
                    </b>
                    &nbsp;

                  </font
                  >
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="left" valign="top">
                  <font face="arial" size="1">
                    04 CÓDIGO DA RECEITA
                    <br />
                  </font>
                </td>
                <td align="right" width="128">
                  <font face="tahoma" size="1">
                    <br />
                    <b>6015</b>
                    &nbsp;
                  </font>
                </td>
              </tr>
              <tr>
                <td align="left" width="316" rowSpan="2">
                  <font face="arial" size="1">01 NOME / TELEFONE</font>
                  <br />
                  <font
                    face="tahoma"
                    size="1"
                  >
                    &nbsp;
                    <b>{name}</b>
                    <br />
                    <font face="tahoma" size="1">
                      &nbsp;
                      <b />
                    </font
                    >
                  </font
                  >
                </td>
                <td colSpan="2" align="left" valign="top">
                  <font face="arial" size="1">
                    05 NÚMERO DE REFERÊNCIA
                    <br />
                  </font>
                </td>
                <td align="right" width="128">
                  <font face="tahoma" size="1">
                    <br />
                    <b />
                    &nbsp;
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="left" valign="top">
                  <font face="arial" size="1">
                    06 DATA DE VENCIMENTO
                    <br />
                  </font>
                </td>
                <td align="right" width="128">
                  <font face="tahoma" size="1">
                    <br />
                    <b>{expireDate}</b>
                    &nbsp;
                  </font>
                </td>
              </tr>
              <tr>
                <td width="316" rowSpan="3" align="left">
                  <font face="arial" size="1">&nbsp;</font>
                </td>
                <td colSpan="2" align="left" valign="top">
                  <font face="arial" size="1">
                    07 VALOR DO PRINCIPAL
                    <br />
                  </font>
                </td>
                <td width="128" align="right">
                  <font face="tahoma" size="1">
                    <br />
                    <b>0,00</b>
                    {' '}
                    &nbsp;
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="left" valign="top">
                  <font face="arial" size="1">
                    08 VALOR DA MULTA
                    <br />
                  </font>
                </td>
                <td width="128" align="right">
                  <font face="tahoma" size="1">
                    <br />
                    <b>0,00</b>
                    {' '}
                    &nbsp;
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="left" valign="top">
                  <font
                    face="arial"
                    size="1"
                  >
                    09 VALOR DOS JUROS E/OU ENCARGOS DL - 1.025/69

                  </font
                  >
                </td>
                <td width="128" align="right">
                  <font face="tahoma" size="1">
                    <br />
                    <b>0,00</b>
                    {' '}
                    &nbsp;
                  </font>
                </td>
              </tr>
              <tr>
                <td width="316" rowSpan="2" align="center">
                  <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                      <tr>
                        <td align="center">
                          <font face="tahoma" size="1"><b>ATENÇÃO</b></font>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td align="center">
                          <p align="justify">
                            <font
                              face="tahoma"
                              size="1"
                            >
                              É vedado o recolhimento de tributos e contribuições
                              administrados pela Secretaria da Receita Federal
                              cujo valor total seja inferior a R$ 10,00. Ocorrendo
                              tal situação, adicione esse valor ao
                              tributo/contribuição de mesmo código de períodos
                              subsequentes, até que o total seja igual ou superior
                              a R$ 10,00.

                            </font
                            >
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td colSpan="2" align="left" valign="top">
                  <font face="arial" size="1">10 VALOR TOTAL</font>
                </td>
                <td width="128" align="right">
                  <font face="tahoma" size="1">
                    <br />
                    <b>{(Math.round(darfValue * 100) / 100).toFixed(2).replace('.', ',')}</b>
                    {' '}
                    &nbsp;
                  </font>
                </td>
              </tr>
              <tr>
                <td colSpan="3" width="320" align="left" valign="top">
                  <font face="arial" size="1">
                    11 AUTENTICAÇÃO
                    <br />
                    <font
                      face="tahoma"
                      size="1"
                    >
                      &nbsp;
                      <br />
                      <font face="tahoma" size="1">
                        &nbsp;
                      </font
                      >
                    </font
                    >

                  </font
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <table
            width="650"
            bordercolor="#000000"
            cellSpacing="0"
            bordercolordark="#000000"
            cellPadding="0"
            bordercolorlight="#000000"
            border="0"
          />
          <center>
            <div align="center">
              <p>
                &nbsp;
                <br />
                &nbsp;
                {' '}
                <br />
                --------------------------------------------------------------------------------------------------------------------
                <br />
                &nbsp;
                {' '}
                <br />
                &nbsp;&nbsp;&nbsp;
              </p>
              <center>
                <table
                  width="650"
                  bordercolor="#000000"
                  cellSpacing="0"
                  bordercolordark="#000000"
                  cellPadding="2"
                  bordercolorlight="#000000"
                  border="1"
                >
                  <tbody>
                    <tr>
                      <td align="center" width="316" rowSpan="3">
                        <img
                          alt="brasil"
                          src={brasil}
                          border="0"
                          width="71"
                          height="77"
                          align="left"
                        />
                        <b>
                          <font
                            size="2"
                            color="#000000"
                            face="Verdana"
                          >
                            MINISTÉRIO DA FAZENDA
                            <br />
                            Secretaria da Receita
                            Federal
                            <br />
                          </font>
                        </b
                        >
                        <font color="#000000" face="arial" size="1">
                          Documento de Arrecadação de Receitas Federais
                        </font
                        >
                        <b>
                          <font
                            size="2"
                            color="#000000"
                            face="Verdana"
                          >
                            <br />
                          </font
                          >
                          <font color="#000000" face="Verdana" size="4">
                            DARF
                          </font
                          >
                        </b
                        >
                      </td>
                      <td colSpan="2" align="left" valign="top">
                        <font
                          face="arial"
                          size="1"
                        >
                          02 PERÍODO DE APURAÇÃO
                          <br />

                        </font>
                      </td>
                      <td align="right" width="128">
                        <font
                          face="tahoma"
                          size="1"
                        >
                          <br />
                          <b>{calcPeriod}</b>
                          {' '}
                          &nbsp;

                        </font
                        >
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" align="left" valign="top">
                        <font
                          face="arial"
                          size="1"
                        >
                          03 NÚMERO DO CPF / CNPJ
                          <br />

                        </font>
                      </td>
                      <td align="right" width="128">
                        <font
                          face="tahoma"
                          size="1"
                        >
                          <br />
                          <b>
                            {cpf.replace(/\D/g, '')
                              .replace(/(\d{3})(\d)/, '$1.$2')
                              .replace(/(\d{3})(\d)/, '$1.$2')
                              .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                              .replace(/(-\d{2})\d+?$/, '$1')}
                          </b>
                          &nbsp;

                        </font
                        >
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" align="left" valign="top">
                        <font
                          face="arial"
                          size="1"
                        >
                          04 CÓDIGO DA RECEITA
                          <br />

                        </font>
                      </td>
                      <td align="right" width="128">
                        <font
                          face="tahoma"
                          size="1"
                        >
                          <br />
                          <b>6015</b>
                          &nbsp;

                        </font
                        >
                      </td>
                    </tr>
                    <tr>
                      <td align="left" width="316" rowSpan="2">
                        <font face="arial" size="1">
                          01 NOME / TELEFONE
                        </font
                        >
                        <br />
                        <font
                          face="tahoma"
                          size="1"
                        >
                          &nbsp;
                          <b>{name}</b>
                          <br />
                          <font face="tahoma" size="1">
                            &nbsp;
                            <b />
                          </font
                          >
                        </font
                        >
                      </td>
                      <td colSpan="2" align="left" valign="top">
                        <font
                          face="arial"
                          size="1"
                        >
                          05 NÚMERO DE REFERÊNCIA
                          <br />

                        </font>
                      </td>
                      <td align="right" width="128">
                        <font face="tahoma" size="1">
                          <br />
                          <b />
                          &nbsp;
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" align="left" valign="top">
                        <font
                          face="arial"
                          size="1"
                        >
                          06 DATA DE VENCIMENTO
                          <br />

                        </font>
                      </td>
                      <td align="right" width="128">
                        <font
                          face="tahoma"
                          size="1"
                        >
                          <br />
                          <b>{expireDate}</b>
                          &nbsp;

                        </font
                        >
                      </td>
                    </tr>
                    <tr>
                      <td width="316" rowSpan="3" align="left">
                        <font face="arial" size="1">&nbsp;</font>
                      </td>
                      <td colSpan="2" align="left" valign="top">
                        <font
                          face="arial"
                          size="1"
                        >
                          07 VALOR DO PRINCIPAL
                          <br />

                        </font>
                      </td>
                      <td width="128" align="right">
                        <font
                          face="tahoma"
                          size="1"
                        >
                          <br />
                          <b>0,00</b>
                          {' '}
                          &nbsp;

                        </font
                        >
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" align="left" valign="top">
                        <font face="arial" size="1">
                          08 VALOR DA MULTA
                          <br />
                        </font>
                      </td>
                      <td width="128" align="right">
                        <font
                          face="tahoma"
                          size="1"
                        >
                          <br />
                          <b>0,00</b>
                          {' '}
                          &nbsp;

                        </font
                        >
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" align="left" valign="top">
                        <font
                          face="arial"
                          size="1"
                        >
                          09 VALOR DOS JUROS E/OU ENCARGOS DL - 1.025/69

                        </font
                        >
                      </td>
                      <td width="128" align="right">
                        <font
                          face="tahoma"
                          size="1"
                        >
                          <br />
                          <b>0,00</b>
                          {' '}
                          &nbsp;

                        </font
                        >
                      </td>
                    </tr>
                    <tr>
                      <td width="316" rowSpan="2" align="center">
                        <table cellPadding="0" cellSpacing="0" border="0">
                          <tbody>
                            <tr>
                              <td align="center">
                                <font face="tahoma" size="1"><b>ATENÇÃO</b></font>
                              </td>
                              <td />
                            </tr>
                            <tr>
                              <td align="center">
                                <p align="justify">
                                  <font
                                    face="tahoma"
                                    size="1"
                                  >
                                    É vedado o recolhimento de tributos e
                                    contribuições administrados pela Secretaria da
                                    Receita Federal cujo valor total seja inferior
                                    a R$ 10,00. Ocorrendo tal situação, adicione
                                    esse valor ao tributo/contribuição de mesmo
                                    código de períodos subsequentes, até que o
                                    total seja igual ou superior a R$ 10,00.

                                  </font
                                  >
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td colSpan="2" align="left" valign="top">
                        <font face="arial" size="1">10 VALOR TOTAL</font>
                      </td>
                      <td width="128" align="right">
                        <font
                          face="tahoma"
                          size="1"
                        >
                          <br />
                          <b>{(Math.round(darfValue * 100) / 100).toFixed(2).replace('.', ',')}</b>
                          {' '}
                          &nbsp;

                        </font
                        >
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3" width="320" align="left" valign="top">
                        <font face="arial" size="1">
                          11 AUTENTICAÇÃO
                          <br />
                          <font
                            face="tahoma"
                            size="1"
                          >
                            &nbsp;
                            <br />
                            <font face="tahoma" size="1">
                              &nbsp;
                            </font
                            >
                          </font
                          >

                        </font
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  width="650"
                  bordercolor="#000000"
                  cellSpacing="0"
                  bordercolordark="#000000"
                  cellPadding="0"
                  bordercolorlight="#000000"
                  border="0"
                />
                <center>
                  <p align="center">&nbsp;</p>
                </center>
              </center>
            </div>
          </center>
        </center>
      </div>
    </DarfDiv>
  );
}

export default Darf;
