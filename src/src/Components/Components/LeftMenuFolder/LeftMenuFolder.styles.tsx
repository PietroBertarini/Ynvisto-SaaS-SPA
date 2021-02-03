import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../../../Theme/theme';

export const useStyles = makeStyles(() => createStyles({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
