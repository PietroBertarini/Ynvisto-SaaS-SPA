import styled from 'styled-components';
import { ELabelColors } from './LabelStocks.utils';

interface LabelProps {
  title: string;
}

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 5px;
`;

export const Label = styled.div<LabelProps>`
  border-radius: 7px;
  height: 30px;
  width: 130px;

  color: #fff;
  text-align: center;

  background-color: ${(props) => {
    switch (props.title) {
      case ELabelColors.ACOES:
        return '#64C07F';
      case ELabelColors.BDR:
        return '#5349BD';
      case ELabelColors.CRYPTO:
        return '#5FC2FA';
      case ELabelColors.ETF:
        return '#F49A59';
      case ELabelColors.FII:
        return '#BFC769';
      case ELabelColors.INTERNATIONAL:
        return '#0075FF';
      case ELabelColors.OPCAO:
        return '#EE6868';
      case ELabelColors.SUBSCRIPTION:
        return '#D954DC';
      default: return '#64C07F';
    }
  }};
`;
