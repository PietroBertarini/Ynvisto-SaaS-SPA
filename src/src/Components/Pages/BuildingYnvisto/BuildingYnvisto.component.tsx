import React from 'react';
import Referral from '../../Components/Referral/Referral.component';
import { ReactComponent as Social } from '../../../Assets/Images/social-growth.svg';
import { Main } from './BuildingYnvisto.styles';

const BuildingYnvisto: React.FC = () => {
  const title = 'O que você gostaria de ver na Ynvisto ?';
  const text = ['Nós da Ynvisto gostaríamos de facilitar a vida do investidor brasileiro '
   + 'e faremos isso com base na opinião de cada cliente nosso, construindo um produto que seja '
   + 'referência no mercado.', 'Com isso, gostaríamos de escutar cada pedido de nossos clientes, '
   + 'para que seja algo feito para a comunidade da Ynvisto.'];
  const buttonTitle = 'Faça seu pedido aqui';

  return (
    <Main>
      <Referral
        title={title}
        texts={text}
        svg={(
          <Social
            style={{ height: '50vh' }}
          />
        )}
        buttonTitle={buttonTitle}
        onClick={() => {
          window.open('https://form.jotform.com/ynvisto/construa-ynvisto');
        }}
      />
    </Main>
  );
};

export default BuildingYnvisto;
