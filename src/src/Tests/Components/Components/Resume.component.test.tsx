import React from 'react';
import { shallow } from 'enzyme';
import Resume from '../../../Components/Components/Resume/Resume.component';
import {
  mockOneResumeInfo, mockThreeResumeInfo, mockTwoResumeInfo,
} from '../../../Mocks/ResumeInfo.mock';

test('Renders Resume components and match to previously snapshot', () => {
  const oneStatusComponent = shallow(
    <Resume allResumeInfo={mockOneResumeInfo} />,
  );
  const twoStatusComponent = shallow(
    <Resume allResumeInfo={mockTwoResumeInfo} />,
  );
  const threeStatusComponent = shallow(
    <Resume allResumeInfo={mockThreeResumeInfo} />,
  );
  const fiveStatusComponent = shallow(
    <Resume allResumeInfo={mockThreeResumeInfo.concat(mockTwoResumeInfo)} />,
  );

  expect(oneStatusComponent).toMatchSnapshot();
  expect(twoStatusComponent).toMatchSnapshot();
  expect(threeStatusComponent).toMatchSnapshot();
  expect(fiveStatusComponent).toMatchSnapshot();
});
