import React from 'react';
import { shallow } from 'enzyme';
import ResumeInfo, { EResumeStatus, ResumoInfoProps } from '../../../Components/Components/ResumeInfo/ResumeInfo.component';

test('Renders ResumoInfo components and match to previously snapshot', () => {
  const mockProps : ResumoInfoProps = {
    value: 30_304.94,
    subtitle: 'Maio',
    status: EResumeStatus.GOOD,
  };

  const defaultStatusComponent = shallow(
    <ResumeInfo
      status={EResumeStatus.GOOD}
      value={mockProps.value}
      subtitle={mockProps.subtitle}
    />,
  );
  const alertStatusComponent = shallow(
    <ResumeInfo
      status={EResumeStatus.WARNING}
      value={mockProps.value}
      subtitle={mockProps.subtitle}
    />,
  );
  const warningStatusComponent = shallow(
    <ResumeInfo
      status={EResumeStatus.BAD}
      value={mockProps.value}
      subtitle={mockProps.subtitle}
    />,
  );
  const okStatusComponent = shallow(
    <ResumeInfo
      status={EResumeStatus.GOOD}
      value={mockProps.value}
      subtitle={mockProps.subtitle}
    />,
  );
  expect(defaultStatusComponent).toMatchSnapshot();
  expect(alertStatusComponent).toMatchSnapshot();
  expect(warningStatusComponent).toMatchSnapshot();
  expect(okStatusComponent).toMatchSnapshot();
});
