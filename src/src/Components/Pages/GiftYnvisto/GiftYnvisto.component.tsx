import React, { useCallback, useEffect, useState } from 'react';
import Referral from '../../Components/Referral/Referral.component';
import { ReactComponent as Gift } from '../../../Assets/Images/gift.svg';
import { ReactComponent as Friendship } from '../../../Assets/Images/friendship.svg';
import { Main } from './GiftYnvisto.styles';
import { getLinkReferral, getInfoReferral, copyInvite } from './GiftYnvisto.utils';
import { IReferralResponse } from '../../../Redux/Services/Referral/Referral.api';
import Spinner from '../../Components/Spinner/spinner.component';

const GiftYnvisto: React.FC = () => {
  const [gettingInfo, setGettingInfo] = useState(true);
  const [redeemedInvites, setRedeemedInvites] = useState(0);
  const [remainingInvites, setRemainingInvites] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await getInfoReferral();
      setRedeemedInvites((response as IReferralResponse).redeemedInvites);
      setRemainingInvites((response as IReferralResponse).remainingInvites);
      setGettingInfo(false);
    }
    fetchData();
  }, [gettingInfo]);

  const title = 'Ajude outros investidores dando a Ynvisto de presente!';

  const youSavedText = (redeemedInvites > 0)
    ? `Você sabia que já salvou ${redeemedInvites} pessoas do inferno tributário brasileiro?` : '';
  const text = (remainingInvites > 0) ? [
    'Você conhece algum investidor que está precisando de uma ajuda com a tributação dos seus investimentos?',
    'Se sim, dê de presente 1 mês grátis de Ynvisto! Caso ele não tenha experimentado a plataforma ainda, '
  + 'o seu convite vale uma oferta especial de 1 mês grátis.',
    youSavedText,
  ] : [`Você já salvou ${redeemedInvites} pessoas do inferno tributário brasileiro!`,
    'Continue a ajudar mais investidores a simplificarem sua tributação na bolsa por meio do link abaixo.'];

  const buttonTitle = (remainingInvites > 0)
    ? 'Clique para copiar seu convite'
    : 'Clique para copiar sua recomendação';

  const underButtonText = (remainingInvites > 0)
    ? `Você tem direito à mais ${remainingInvites} convites com mês grátis`
    : '';

  const referralText = (remainingInvites > 0)
    ? 'Você recebeu um presente para conhecer a Ynvisto. Experimente gratuitamente por 30 dias '
  + 'uma vida na bolsa de valores sem se preocupar com os cálculos de sua tributação e aproveite de todas as normas '
  + 'para diminuir o valor de seu imposto.\n'
    : 'Você foi indicado para a Ynvisto. Isso significa que alguém quer te ajudar a lidar melhor com seu imposto na '
  + 'bolsa de valores, tendo menos trabalho e pagando menos. Experimente gratuitamente por 7 dias uma vida na '
  + 'bolsa de valores sem se preocupar com os cálculos de sua tributação e aproveite de todas as normas '
  + 'para diminuir o valor de seu imposto.\n https://www.ynvisto.com/';

  const getLink = useCallback(async () => {
    const response = await getLinkReferral();

    if (response !== '') {
      copyInvite(referralText + response);
    }
  }, [referralText]);

  if (gettingInfo) {
    return <Spinner />;
  }

  return (
    <Main>
      {!gettingInfo && (
      <Referral
        title={title}
        texts={text}
        svg={(remainingInvites > 0)
          ? (<Gift style={{ height: '50vh' }} />)
          : (<Friendship style={{ height: '50vh' }} />)}
        buttonTitle={buttonTitle}
        underButtonText={underButtonText}
        onClick={(remainingInvites > 0) ? getLink : () => copyInvite(referralText)}
      />
      )}
    </Main>
  );
};

export default GiftYnvisto;
