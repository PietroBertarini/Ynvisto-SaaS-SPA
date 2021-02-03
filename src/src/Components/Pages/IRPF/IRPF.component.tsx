import React from 'react';
import { Typography } from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router-dom';
import { State } from '../../../Redux/root-reducer';
import ScrollTabs from '../../Components/ScrollTabs/ScrollTabs.component';
import AssetsRights from '../../Components/AssetsRights/AssetsRights.component';
import { allTabs, getInitialValueTab } from './IRPF.utils';
import {
  Main, useStyles,
} from './IRPF.styles';

const mapStateToProps = (state: State) => ({
  assetsRights: state.irpf.assetsRights,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

function IRPF(props: Props) {
  const { assetsRights } = props;

  const { page } = useParams<{ page: string }>();
  const navBarActive = getInitialValueTab(page);

  const classes = useStyles();

  return (
    <Main>
      <Typography className={classes.header}>
        IRPF - Imposto de Renda Pessoa Física
      </Typography>
      <ScrollTabs initialTabValue={navBarActive} tabsLabel={allTabs} />
      {navBarActive === 0 && <AssetsRights assetsRights={assetsRights} />}
    </Main>
  );
}

export default connector(IRPF);
