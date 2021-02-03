import React from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { State } from '../../../Redux/root-reducer';
import { requestRefreshToken } from '../../../Redux/Services/Authorization/Authorization.actions';

export interface OwnProps {
  Component: React.FC<RouteComponentProps>;
  path: string[];
  exact?: boolean;
}

const mapStateToProps = (state: State) => ({
  user: state.authorization.user,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & OwnProps;

const AuthRoute = ({
  user, exact, path, Component,
}: Props) => {
  const dispatch = useDispatch();
  if (user?.needRefreshToken()) {
    dispatch(requestRefreshToken());
  }
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) => (user?.isAuth() ? (<Component {... props} />) : (
        <Redirect to="/Login/" />))}
    />
  );
};

export default connector(AuthRoute);
