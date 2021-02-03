import React, { useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Card, CardActionArea,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from './MonthlyCardReport.styles';
import ValuesBar from '../ValuesBar/ValuesBar.component';
import MonthlyCardReportLegend from '../MonthlyCardReportLegend/MonthlyCardReportLegend.component';
import { IMonthlyCardData } from '../MonthlyCardReportLegend/MonthlyCardReportLegend.types';

export enum ETitleStatus {
  GOOD = 'GOOD',
  WARNING = 'WARNING',
  BAD = 'BAD',
}

export interface OwnProps {
  /**
   * Header Status. Directly controls the color of the header monetary value
   */
  status: ETitleStatus,
  /**
   * Title of the card
   */
  title: string,
  /**
   * Main monetary value displayed on at the top of the card
   */
  headerMonetaryValue: number,
  /**
   * The data info to construct the legend and the bar of the card.
   */
  data: IMonthlyCardData[],
  /**
   * Modal that will be shown if clicked.
   */
  detailsModal?: JSX.Element,
}

/**
 * Get the stores states that TaxComponents uses and observe.
 * @param state: the stored stated of the Ynvisto.
 */

/**
 * Card with % bar and legend to show some inf.
 */
function MonthlyCardReport(props : OwnProps) {
  const {
    title, headerMonetaryValue, data, detailsModal,
  } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Empty function, according by ESlint documentation, to avoid empty arrow functions
  const emptyFunc = useCallback(() => {
    // do nothing
  }, []);

  const classes = useStyles(props);
  return (
    <>
      <Card className={classes.card} onClick={detailsModal ? handleOpen : emptyFunc}>
        <CardActionArea className={classes.actionArea}>
          <CardContent className={classes.titleContainer}>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
              alignItems="center"
              className={classes.titleContainer}
            >
              <Typography variant="h5" align="center" className={classes.title}>
                {title}
              </Typography>
            </Box>
          </CardContent>
          <CardContent className={classes.content}>
            <Box display="flex" flexDirection="column" alignSelf="center" justifyContent="center">
              <Typography variant="h4" className={classes.headerMonetaryValue}>
                {headerMonetaryValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </Typography>
              <ValuesBar
                data={data}
              />
              <MonthlyCardReportLegend legendData={data} />
            </Box>
            {detailsModal && (<div className={classes.showDiv}><p className={classes.showMore}>Mais Detalhes</p></div>)}
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        className={classes.modal}
        onClose={handleClose}
        scroll="body"
        PaperProps={{
          style: { borderRadius: 20, backgroundColor: 'transparent' },
        }}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <div className={classes.paper}>
          {detailsModal}
        </div>
      </Dialog>
    </>
  );
}

export default MonthlyCardReport;
