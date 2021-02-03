import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React, { ReactNode } from 'react';
import { Collapse, SvgIcon } from '@material-ui/core';
import { ExpandMore, ChevronRight } from '@material-ui/icons';
import { useStyles } from './LeftMenuFolder.styles';

export interface OwnProps {
    label: string;
    iconPath: any;
    children: ReactNode;
}

/**
 * This component looks like a @IconTextButton, but instead of be a Link when clicked
 * the @LeftMenuFolder expand the @LeftMenu showing more @IconTextButtons. Is a
 * Folder of buttons of @LeftMenu.
 * @param label: The text showing at the folder component.
 * @param iconPath: The icon that is render at tge left of @label.
 * @param children: A component List of component IconTextButton, that will be expanded
 * when clicked.
 */
function MenuFolder({ label, iconPath, children } : OwnProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        {open ? <ExpandMore /> : <ChevronRight style={{ color: '#B1B1B1' }} />}
        <ListItemIcon style={{ minWidth: 40 }}>
          <SvgIcon
            style={open ? { color: '#FFF', marginLeft: 5 } : { color: '#B1B1B1', marginLeft: 5 }}
            component={iconPath}
            viewBox="0 0 600 476.6"
          />
        </ListItemIcon>
        <ListItemText primary={label} style={open ? { color: '#FFF' } : { color: '#B1B1B1' }} />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className={classes.nested}>
          {children}
        </div>
      </Collapse>
    </div>
  );
}
export default MenuFolder;
