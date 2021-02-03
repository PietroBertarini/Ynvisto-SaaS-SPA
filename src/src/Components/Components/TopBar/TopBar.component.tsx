import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { connect, ConnectedProps } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { StyledAppBar, useStyles } from './TopBar.styles';
import { State } from '../../../Redux/root-reducer';

/**
 * Get the stores states that TopBar uses and change.
 * @param state: the stored stated of the Ynvisto.
 */
const mapStateToProps = (state: State) => ({
  activePeriod: state.topBar.activePeriod,
  activeWallet: state.topBar.activeWallet,
  wallets: state.topBar.wallets,
  notifications: state.topBar.notifications,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export type OwnProps = PropsFromRedux

/**
 * Is the TopBar of Ynvisto that changes the Active Wallet, Active Period,
 * see the notifications, perfil and the search bar.
 * @param props: all states from store that topBar view and change.
 */
const TopBar = (props: OwnProps) => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} noWrap>
            Ynvisto
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default connector(TopBar);
