import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import OptionsStyles from './OrderOptions.css';

const OPTIONS = {
  CHAR_ID: { key: 'char_id', value: 'ID' },
  NAME: { key: 'name', value: 'Name' },
  PORTRAYED: { key: 'portrayed', value: 'Portrayed' },
};

function OrderOptions({ isOpen, sort, onClose, onToggleSort, onSort }) {
  const classes = OptionsStyles();
  const anchorRef = useRef(null);

  const handleToggleSort = () => onToggleSort((prevIsOpen) => !prevIsOpen);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    onClose(false);
  };

  const handleSort = (type) => onSort(type, false);

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      onClose(false);
    }
  }

  const prevIsOpen = useRef(isOpen);

  useEffect(() => {
    if (prevIsOpen.current === true && isOpen === false) {
      anchorRef.current.focus();
    }
    prevIsOpen.current = isOpen;
  }, [isOpen]);

  return (
    <>
      <Tooltip title="Sort by" aria-label="Sort by" placement="top">
        <IconButton
          aria-label="Sort by"
          ref={anchorRef}
          aria-controls={isOpen ? 'menu-list-grow' : undefined}
          onClick={handleToggleSort}
        >
          <MoreVertRoundedIcon />
        </IconButton>
      </Tooltip>
      <Popper open={isOpen} anchorEl={anchorRef.current} placement="right-start">
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList autoFocusItem={isOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
              {_.values(OPTIONS).map((item) => (
                <MenuItem
                  key={item.key}
                  className={sort === item.key ? classes.selected : null}
                  selected={sort === item.key}
                  onClick={() => handleSort(item.key)}
                >
                  <Typography variant="body1">{item.value}</Typography>
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
}

OrderOptions.propTypes = {
  isOpen: PropTypes.bool,
  sort: PropTypes.oneOf([OPTIONS.CHAR_ID.key, OPTIONS.NAME.key, OPTIONS.PORTRAYED.key]),
  onClose: PropTypes.func,
  onToggleSort: PropTypes.func,
  onSort: PropTypes.func,
};

export default OrderOptions;
