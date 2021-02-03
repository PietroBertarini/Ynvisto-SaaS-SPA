import React from 'react';
import Box from '@material-ui/core/Box';

import { useStyles } from './Resume.styles';
import ResumeInfo, { ResumoInfoProps } from '../ResumeInfo/ResumeInfo.component';

export interface ResumeProps {
    /**
     * Array with all resume info to show at page. Max 3
     */
    allResumeInfo: ResumoInfoProps[];

}
/**
 * Simple component that have a value in R$ format with status color and a subtitle.
 */
function Resume(props :ResumeProps) {
  const {
    allResumeInfo,
  } = props;
  const classes = useStyles();
  if (allResumeInfo.length === 1) {
    return (
      <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.resume}>
        <Box />
        <ResumeInfo
          value={allResumeInfo[0].value}
          status={allResumeInfo[0].status}
          subtitle={allResumeInfo[0].subtitle}
        />
        <Box />
      </Box>
    );
  }
  if (allResumeInfo.length === 2) {
    return (
      <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.resume}>
        <ResumeInfo
          value={allResumeInfo[0].value}
          status={allResumeInfo[0].status}
          subtitle={allResumeInfo[0].subtitle}
        />
        <Box />
        <ResumeInfo
          value={allResumeInfo[1].value}
          status={allResumeInfo[1].status}
          subtitle={allResumeInfo[1].subtitle}
        />
      </Box>
    );
  }
  if (allResumeInfo.length >= 3) {
    return (
      <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.resume}>
        <ResumeInfo
          value={allResumeInfo[0].value}
          status={allResumeInfo[0].status}
          subtitle={allResumeInfo[0].subtitle}
        />
        <ResumeInfo
          value={allResumeInfo[1].value}
          status={allResumeInfo[1].status}
          subtitle={allResumeInfo[1].subtitle}
        />
        <ResumeInfo
          value={allResumeInfo[2].value}
          status={allResumeInfo[2].status}
          subtitle={allResumeInfo[2].subtitle}
        />
      </Box>
    );
  }
  return (
    <div />
  );
}
export default Resume;
