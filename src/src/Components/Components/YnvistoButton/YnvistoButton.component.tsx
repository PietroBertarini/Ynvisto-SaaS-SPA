import React from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from './YnvistoButton.styles';
import { SpinnerContainer } from '../Spinner/spinner.styles';

export enum EButtonColor {
  PRIMARY = 'PRIMARY',
  DANGER = 'DANGER',
}

type ButtonProps = {
  title: string,
  isLoading?: boolean,
  status?: string,
  underButtonText?: string,
  onClick: () => any
}

const YnvistoButton = ({
  title, onClick, isLoading, status, underButtonText,
} : ButtonProps) => {
  const classes = useStyles(status ? { status } : { status: 'PRIMARY' });
  const spinnerColor = (status === 'DANGER') ? '#EB5050' : '#E9C46A';

  return (
    <div className={classes.main}>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={onClick}
      >
        {isLoading ? <SpinnerContainer size={30} spinnerColor={spinnerColor} /> : title }
      </Button>
      <h5 className={classes.underText}>{underButtonText}</h5>
    </div>
  );
};

export default YnvistoButton;
