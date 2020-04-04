import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

const ViewFormat = ({ type, icon }) => {
  const capitalizedType = _.capitalize(type);
  return (
    <Tooltip
      title={`${capitalizedType} format`}
      aria-label={`${capitalizedType} format`}
      placement="top"
    >
      <span>
        <IconButton aria-label={`${capitalizedType} format`} disabled>
          {icon}
        </IconButton>
      </span>
    </Tooltip>
  );
};

ViewFormat.propTypes = {
  type: PropTypes.oneOf(['column', 'list']),
  icon: PropTypes.object,
};

export default ViewFormat;
