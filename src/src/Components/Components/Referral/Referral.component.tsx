import React from 'react';
import { Typography } from '@material-ui/core';
import YnvistoButton from '../YnvistoButton/YnvistoButton.component';
import { Main, useStyles } from './Referral.styles';

interface OwnProps {
  title: string;
  texts: string[];
  svg?: any;
  buttonTitle?: string;
  underButtonText?: string;
  onClick?: () => any;
}

const Referral: React.FC<OwnProps> = ({
  title, texts, svg, buttonTitle, underButtonText, onClick,
}: OwnProps) => {
  const classes = useStyles();

  return (
    <Main>
      <Typography className={classes.header}>{title}</Typography>
      <div className="svgArea">
        {svg}
      </div>
      {texts.map((text) => (
        <Typography className={classes.text} key={text}>{text}</Typography>
      ))}
      <div className="buttonArea">
        {buttonTitle && onClick && (
        <YnvistoButton
          title={buttonTitle}
          onClick={onClick}
          underButtonText={underButtonText}
        />
        )}
      </div>
    </Main>
  );
};

export default Referral;
