import React from 'react';
import { shallow } from 'enzyme';
import ProfitCard, { EProfitCardStatus, ProfitCardProps } from '../../../Components/Components/ProfitCard/ProfitCard.component';

test('Renders ProfitCardProps components and match to previously snapshot', () => {
  const mockProps : ProfitCardProps = {
    profit: 30_304.94,
    tax: 506.14,
    month: 'Maio',
    status: EProfitCardStatus.PENDING,
  };

  const paidStatusComponent = shallow(
    <ProfitCard
      status={EProfitCardStatus.PAID}
      month={mockProps.month}
      profit={mockProps.profit}
      tax={mockProps.tax}
    />,
  );
  const pendentStatusComponent = shallow(
    <ProfitCard
      status={EProfitCardStatus.PENDING}
      month={mockProps.month}
      profit={mockProps.profit}
      tax={mockProps.tax}
    />,
  );
  const NoDarfStatusComponent = shallow(
    <ProfitCard
      status={EProfitCardStatus.NO_DARF}
      month={mockProps.month}
      profit={mockProps.profit}
      tax={mockProps.tax}
    />,
  );
  const inProgressStatusComponent = shallow(
    <ProfitCard
      status={EProfitCardStatus.NOT_FINISHED}
      month={mockProps.month}
      profit={mockProps.profit}
      tax={mockProps.tax}
    />,
  );
  const lateStatusComponent = shallow(
    <ProfitCard
      status={EProfitCardStatus.LATE}
      month={mockProps.month}
      profit={mockProps.profit}
      tax={mockProps.tax}
    />,
  );
  expect(paidStatusComponent).toMatchSnapshot();
  expect(pendentStatusComponent).toMatchSnapshot();
  expect(NoDarfStatusComponent).toMatchSnapshot();
  expect(inProgressStatusComponent).toMatchSnapshot();
  expect(lateStatusComponent).toMatchSnapshot();
});
