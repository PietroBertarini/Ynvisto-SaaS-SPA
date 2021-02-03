import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useStyles } from './ResumeInfo.styles';

export enum EResumeStatus {
    GOOD = 'GOOD',
    WARNING = 'WARNING',
    BAD = 'BAD',
}

export interface ResumoInfoProps {
    /**
     * Value of
     */
    value: number
    /**
     * Subtitle Text of ResumeInfo
     */
    subtitle: string;
    /**
     * Status of resume will be represent by a color,
     * NoStatus - White,
     * Alert - Yellow,
     * Warning - Red,
     * Ok - Green.
     */
    status: EResumeStatus;

}
/**
 * Simple component that have a value in R$ format with status color and a subtitle.
 */
function ResumeInfo(props : ResumoInfoProps) {
  const {
    value, subtitle,
  } = props;
  const classes = useStyles(props);
  return (
    <Box display="flex" flexDirection="column" alignSelf="center" justifyContent="center">
      <Typography className={classes.resumeHeader}>
        {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </Typography>
      <Typography className={classes.resumeSubTitle} align="center">
        {subtitle}
      </Typography>
    </Box>

  );
}
export default ResumeInfo;
