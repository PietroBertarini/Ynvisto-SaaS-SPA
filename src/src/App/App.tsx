import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import LeftMenu from '../Components/Components/LeftMenu/LeftMenu.component';
import { useStyles } from './App.styles';
import TaxReports from '../Components/Pages/TaxReport/TaxReport.component';
import MyStocks from '../Components/Pages/MyStocks/MyStocks.component';
import MonthlyTaxReport from '../Components/Pages/MonthlyTaxReport/MonthlyTaxReport.component';
import Login from '../Components/Pages/Login/Login.component';
import AuthRoute from '../Components/Components/AuthRoute/AuthRoute.component';
import Logout from '../Components/Pages/Login/Logout.component';
import Home from '../Components/Pages/Home/Home.component';
import CurrentPosition from '../Components/Pages/CurrentPosition/CurrentPosition.component';
import Darf from '../Components/Components/Darf/Darf.component';
import BuildingYnvisto from '../Components/Pages/BuildingYnvisto/BuildingYnvisto.component';
import GiftYnvisto from '../Components/Pages/GiftYnvisto/GiftYnvisto.component';
import IRPF from '../Components/Pages/IRPF/IRPF.component';
import CacheBuster from './CacheBuster/CacheBuster';

const YnvistoApp = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main className={classes.content}>
        <Switch>
          <Route exact path="/Logout" component={Logout} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path={['/Darf']} Component={Darf} />
          <>
            <LeftMenu />
            <AuthRoute exact path={['/MinhasAcoes']} Component={MyStocks} />
            <AuthRoute exact path={['/IRPF/', '/IRPF/:page']} Component={IRPF} />
            <AuthRoute exact path={['/MeusAtivos']} Component={CurrentPosition} />
            <AuthRoute exact path={['/ConstruaYnvisto']} Component={BuildingYnvisto} />
            <AuthRoute exact path={['/Presenteie']} Component={GiftYnvisto} />
            <AuthRoute exact path={['/Lucros/', '/Lucros/Geral/']} Component={TaxReports} />
            <AuthRoute exact path={['/Lucros/:month']} Component={MonthlyTaxReport} />
          </>
        </Switch>
      </main>
    </>
  );
};

function App() {
  return (
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          refreshCacheAndReload();
        }
        return <YnvistoApp />;
      }}
    </CacheBuster>
  );
}
export default App;
