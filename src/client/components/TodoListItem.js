import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

const TodoListItem = ({
  divider,
  text,
  checked,
  onButtonClick,
  onCheckboxToggle,
}) => (
  <ListItem divider={divider}>
    <Checkbox
      onClick={onCheckboxToggle}
      checked={checked}
      disableRipple
    />
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <IconButton
        onClick={onButtonClick}
        aria-label="Delete todo"
      >
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

TodoListItem.propTypes = {
  divider: PropTypes.bool,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired,
  onCheckboxToggle: PropTypes.func.isRequired,
};

TodoListItem.defaultProps = {
  divider: false,
  checked: false,
};

export default memo(TodoListItem);
