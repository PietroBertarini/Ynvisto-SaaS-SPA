import React from 'react';
import List from '@material-ui/core/List';
import { SvgIcon, Tooltip } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
  StyledListItemText,
  StyledMenuItem,
  StyledMenu,
  StyledTypography, StyledListItem,
  useStyles,
} from './TopBarDropdown.styles';

export interface OwnProps {
  options: string[];
  iconPath: any;
  tooltip: string;
  activeState: string;
  actionType: string;
}

/**
 * This component is a button from TopBar component, when clicked the button
 * transform into a list of options (all possible states) to change one of the active state of Ynvisto.
 * @param options: all possible states that the dropdown can be.
 * @param iconPath: one icon to render inside the dropdown button.
 * @param tooltip: one tooltip to help the users when the mouse is hover the button.
 * @param activeState: the active state of dropDown button (and Ynvisto),
 * this state will be the label of button.
 * @param changeActiveStateType: the action Redux type of dropdown button.
 */
function TopBarDropdown({
  options, iconPath, tooltip, actionType, activeState,
} : OwnProps) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    dispatch({ type: actionType, payload: options[index] });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Device settings" className={classes.list}>
        <Tooltip title={tooltip}>
          <StyledListItem
            button
            disableGutters
            aria-haspopup="true"
            aria-controls="lock-menu"
            onClick={handleClickListItem}
          >
            <SvgIcon component={iconPath} viewBox="0 0 600 476.6" className={classes.icon} />
            <StyledListItemText
              secondary={activeState}
            />
            <StyledTypography>
              {'\u2304'}
            </StyledTypography>

          </StyledListItem>
        </Tooltip>
      </List>

      <StyledMenu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <StyledMenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
export default TopBarDropdown;
