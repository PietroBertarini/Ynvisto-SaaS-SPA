import React, { useEffect } from 'react';
import '../../../Theme/sweetalert2/sweetalert2.scss';

import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { userLogout } from '../../../Redux/Services/Authorization/Authorization.actions';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogout());
  }, [dispatch]);

  return <Redirect to="/Login/" />;
}
export default Logout;
