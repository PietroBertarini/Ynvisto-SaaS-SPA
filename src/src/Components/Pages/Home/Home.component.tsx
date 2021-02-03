import React, { useEffect } from 'react';

import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Swal from 'sweetalert2';
import '../../../Theme/sweetalert2/sweetalert2.scss';
import { setSpreadSheetAdm } from '../../../Redux/Services/Authorization/Authorization.actions';
import { State } from '../../../Redux/root-reducer';
import { taxReportCleanData } from '../../../Redux/Services/TaxReports/TaxReports.actions';

const mapStateToProps = (state: State) => ({
  user: state.authorization.user,
  spreadsheetAdmin: state.authorization.spreadsheetAdmin,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function Home(props : Props) {
  const { user, spreadsheetAdmin } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.role === 'Admin' && !spreadsheetAdmin) {
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Confirmar',
        showCancelButton: true,
      }).queue([
        {
          title: 'SpreadsheetId',
        },
      ]).then((result) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        if (result.value) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          const answers = result.value[0];
          dispatch(setSpreadSheetAdm(answers));
          dispatch(taxReportCleanData());
          Swal.fire({
            title: 'All done!',
            confirmButtonText: 'Avançar!',
          });
        }
      });
    }
  }, [dispatch, spreadsheetAdmin, user]);

  if (!user) {
    return <Redirect to="/Login/" />;
  }

  return <Redirect to="/Lucros/" />;
}
export default connector(Home);
