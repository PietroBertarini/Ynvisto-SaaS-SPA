import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';
import { ListItem, SvgIcon, Link as hrefLink } from '@material-ui/core';
import Swal from 'sweetalert2';
import { useStyles, EmBreve } from './IconTextButton.styles';

export interface OwnProps {
    /**
     * Showing text of button
     */
    label: string;
    /**
     * Image Icon path of button
     */
    iconPath: any;
    /**
     * Link Path of Ynvisto or text to be shown if functionality not released yet
     */
    path: string;
    /**
     * external Link Path of Ynvisto
     */
    href?: boolean;
    /**
     * functionality not released yet
     */
    commingSoon?: boolean;
    /**
     * active label
     */
    active?: boolean;
    /**
     * onClick function
     */
    onClick?: () => void;
}

/**
 * Component from @LeftMenu that have a icon and text Button, when clicked
 * goes to a @path link.
 * @param label: The showing text from button
 * @param iconPath: IconPath to render at the left of @label.
 * @param path: The url link that the Ynvisto goes when the button is clicked.
 */
function IconTextButton({
  label, iconPath, path, onClick, href, commingSoon, active,
} : OwnProps) {
  const classes = useStyles();
  const showCommingSoon = useCallback((text: string) => {
    Swal.fire({
      icon: 'info',
      title: text,
    });
  }, []);

  if (href) {
    return (
      <ListItem onClick={onClick} button component={hrefLink} target="_blank" href={path} className={classes.listItem}>
        <ListItemIcon style={{ minWidth: 40 }}>
          <SvgIcon style={{ color: '#B1B1B1' }} component={iconPath} viewBox="0 0 600 476.6" />
        </ListItemIcon>
        <ListItemText primary={label} style={{ color: '#B1B1B1' }} />
      </ListItem>
    );
  }

  if (commingSoon) {
    return (
      <ListItem button onClick={() => showCommingSoon(path)} className={classes.listItem}>
        <ListItemIcon style={{ minWidth: 40 }}>
          <SvgIcon style={{ color: '#B1B1B1' }} component={iconPath} viewBox="0 0 600 476.6" />
        </ListItemIcon>
        <ListItemText primary={label} style={{ color: '#B1B1B1' }} />
        <EmBreve>em breve</EmBreve>
      </ListItem>
    );
  }

  if (active) {
    return (
      <ListItem onClick={onClick} button className={classes.active}>
        <ListItemIcon style={{ minWidth: 40 }}>
          <SvgIcon style={{ color: '#fff' }} component={iconPath} viewBox="0 0 600 476.6" />
        </ListItemIcon>
        <ListItemText primary={label} style={{ color: '#fff' }} />
      </ListItem>
    );
  }

  return (
    <ListItem onClick={onClick} button component={Link} to={path} className={classes.listItem}>
      <ListItemIcon style={{ minWidth: 40 }}>
        <SvgIcon style={{ color: '#B1B1B1' }} component={iconPath} viewBox="0 0 600 476.6" />
      </ListItemIcon>
      <ListItemText primary={label} style={{ color: '#B1B1B1' }} />
    </ListItem>
  );
}
export default IconTextButton;
