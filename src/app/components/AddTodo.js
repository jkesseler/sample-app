import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Grid, Paper, TextField,
} from '@material-ui/core';

import * as actions from '../state/todos/actions';

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleTodoAdd = () => {
    const { addTodo } = this.props;
    const { value } = this.state;

    if (value) {
      addTodo(value);
    }
  }

  handleKeyPress = (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      this.handleTodoAdd();
    }
  };

  render() {
    const { value } = this.state;
    return (
      <Paper>
        <Grid style={{ margin: 16, padding: 16 }} container>
          <Grid xs={10} md={11} style={{ paddingRight: 16 }} item>
            <TextField
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              placeholder="Write something"
              value={value}
              fullWidth
            />
          </Grid>
          <Grid xs={2} md={1} item>
            <Button
              color="secondary"
              variant="outlined"
              onClick={this.handleTodoAdd}
            >
                Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}


AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(actions.addTodo(todo)),
});


export default connect(null, mapDispatchToProps)(AddTodo);
