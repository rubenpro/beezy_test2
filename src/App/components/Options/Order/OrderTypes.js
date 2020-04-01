import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

function OrderTypes({ order, handleOrder }) {
  const newOrder = order === ORDER.ASC ? ORDER.DESC : ORDER.ASC;
  const handleToggleOrder = () => handleOrder(newOrder);

  return (
    <Tooltip title={`Order ${newOrder}`} aria-label={`Order ${order}`} placement="top">
      <IconButton aria-label={`Order ${order}`} onClick={handleToggleOrder}>
        {order === ORDER.ASC ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
      </IconButton>
    </Tooltip>
  );
}

OrderTypes.propTypes = {
  order: PropTypes.oneOf([ORDER.ASC, ORDER.DESC]),
  handleOrder: PropTypes.func,
};

export default OrderTypes;
