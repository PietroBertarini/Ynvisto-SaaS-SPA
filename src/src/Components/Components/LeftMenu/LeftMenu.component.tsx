import React, { useCallback, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { connect, ConnectedProps } from 'react-redux';
import { useStyles } from './LeftMenu.styles';
import { ReactComponent as lion } from '../../../Assets/Images/leo.svg';
import { ReactComponent as sync } from '../../../Assets/Images/sync.svg';
import { ReactComponent as ask } from '../../../Assets/Images/ask.svg';
import { ReactComponent as logout } from '../../../Assets/Images/logout.svg';
import { ReactComponent as file } from '../../../Assets/Images/file.svg';
import { ReactComponent as calendar } from '../../../Assets/Images/calendar.svg';
import { ReactComponent as statistics } from '../../../Assets/Images/statistics.svg';
import { ReactComponent as chat } from '../../../Assets/Images/chat.svg';
import { ReactComponent as giftBox } from '../../../Assets/Images/giftBox.svg';
import IconTextButton from '../IconTextButton/IconTextButton.component';
import LeftMenuFolder from '../LeftMenuFolder/LeftMenuFolder.component';
import UploadFilesModalButton from '../UploadFilesModalButton/UploadFilesModalButton.component';
import { State } from '../../../Redux/root-reducer';

/**
 * This component is the Left Drawer Menu that have all Ynvisto Options,
 * is composed of @IconTextButton components.
 */
const mapStateToProps = (state: State) => ({
  user: state.authorization.user,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function LeftMenu({ user } : Props) {
  const classes = useStyles();

  let activeInitialState;
  if (window.location.pathname.includes('Lucros')) activeInitialState = '/Lucros/';
  else if (window.location.pathname.includes('IRPF')) activeInitialState = '/IRPF/';
  else activeInitialState = window.location.pathname;

  const [active, setActive] = useState(activeInitialState);
  const dataLink = `https://docs.google.com/spreadsheets/d/${user?.spreadsheetId}/edit#gid=0`;

  const handleSetActive = useCallback((path: string) => {
    setActive(path);
  }, []);

  return (
    <div className={classes.rootDiv}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        {/* <Toolbar /> waiting topbar */}
        <div className={classes.drawerContainer}>
          <a className={classes.title} href="/">
            Ynvisto
          </a>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.rootList}
          >
            <IconTextButton
              onClick={() => handleSetActive('/Lucros/')}
              active={active === '/Lucros/'}
              label="Apuração de Impostos"
              iconPath={lion}
              path="/Lucros/"
            />
            <LeftMenuFolder iconPath={lion} label="Imposto de Renda">
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <IconTextButton
                  onClick={() => handleSetActive('/IRPF/')}
                  active={active === '/IRPF/'}
                  label="IRPF 2021"
                  iconPath={calendar}
                  path="/IRPF/"
                />
              </List>
            </LeftMenuFolder>
            <IconTextButton
              onClick={() => handleSetActive('/MeusAtivos/')}
              active={active === '/MeusAtivos/'}
              label="Meus Ativos"
              iconPath={statistics}
              path="/MeusAtivos/"
            />
            <UploadFilesModalButton
              label="Enviar Notas"
              iconPath={file}
            />
            { user?.spreadsheetId !== undefined
              && (
              <IconTextButton
                onClick={() => handleSetActive('Minhas Operações')}
                active={active === 'Minhas Operações'}
                label="Minhas Operações"
                iconPath={sync}
                path={dataLink}
                href
              />
              )}
            <IconTextButton
              onClick={() => handleSetActive('/Presenteie/')}
              active={active === '/Presenteie/'}
              label="Ajude Outros Investidores"
              iconPath={giftBox}
              path="/Presenteie/"
            />
            <IconTextButton
              onClick={() => handleSetActive('/ConstruaYnvisto/')}
              active={active === '/ConstruaYnvisto/'}
              label="Construa a Ynvisto"
              iconPath={chat}
              path="/ConstruaYnvisto/"
            />
            <IconTextButton
              onClick={() => handleSetActive('Ajuda')}
              active={active === 'Ajuda'}
              label="Ajuda"
              iconPath={ask}
              path="https://form.jotform.com/ynvisto/duvida-ynvisto"
              href
            />
            <IconTextButton
              onClick={() => handleSetActive('/Logout')}
              active={active === '/Logout'}
              label="Logout"
              iconPath={logout}
              path="/Logout"
            />
          </List>
        </div>
      </Drawer>
    </div>
  );
}
export default connector(LeftMenu);
