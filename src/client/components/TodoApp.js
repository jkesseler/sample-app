import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './Layout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export const TodoApp = () => (
  <CssBaseline>
    <Layout>
      <AddTodo />
      <TodoList />
    </Layout>
  </CssBaseline>
);

export default TodoApp;
