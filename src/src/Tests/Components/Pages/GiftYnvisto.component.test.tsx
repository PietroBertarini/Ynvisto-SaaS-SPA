import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import GiftYnvisto from '../../../Components/Pages/GiftYnvisto/GiftYnvisto.component';
import { IReferralResponse } from '../../../Redux/Services/Referral/Referral.api';

jest.mock('../../../Components/Pages/GiftYnvisto/GiftYnvisto.utils', () => ({
  getInfoReferral: jest.fn(() => new Promise(((resolve) => resolve({
    redeemedInvites: 12,
    remainingInvites: 1,
  } as IReferralResponse)))),

}));

test('Renders GiftYnvisto component and match to previous snapshot', async () => {
  const component = mount(<GiftYnvisto />);

  await act(
    () => new Promise((resolve) => {
      setImmediate(async () => {
        resolve();
      });
    }),
  );
  component.update();
  expect(component).toMatchSnapshot();
});
