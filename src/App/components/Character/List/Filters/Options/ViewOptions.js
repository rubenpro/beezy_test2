import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Grid from '@material-ui/core/Grid';

import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewFormat from './Format/ViewFormat';
import OrderTypes from './Order/OrderTypes';
import OrderOptions from './Order/OrderOptions';

function ViewOptions({ handleOrderBy, handleSortBy, characters }) {
  const [sort, setSort] = useState('char_id');
  const [order, setOrder] = useState('asc');
  const [isOpen, setIsOpen] = useState(false);

  const onSort = (sortType, open) => {
    setSort(sortType);
    handleSortBy(_.orderBy(characters, [sortType], [order]), sortType);
    setIsOpen(open);
  };

  const handleToggleSort = (open) => setIsOpen(open);

  const handleToggleOrder = (newOrder) => {
    setOrder(newOrder);
    handleOrderBy(_.orderBy(characters, sort, newOrder), newOrder);
  };

  const handleClose = (open) => setIsOpen(open);

  return (
    <>
      <Grid item>
        <ViewFormat type="column" icon={<ViewComfyIcon />} />
      </Grid>
      <Grid item>
        <ViewFormat type="list" icon={<ViewListIcon />} />
      </Grid>
      <Grid item>
        <OrderOptions
          isOpen={isOpen}
          sort={sort}
          onClose={handleClose}
          onToggleSort={handleToggleSort}
          onSort={onSort}
        />
      </Grid>
      <Grid item>
        <OrderTypes order={order} handleOrder={handleToggleOrder} />
      </Grid>
    </>
  );
}

ViewOptions.propTypes = {
  handleOrderBy: PropTypes.func,
  handleSortBy: PropTypes.func,
  characters: PropTypes.arrayOf(PropTypes.shape()),
};

export default ViewOptions;
