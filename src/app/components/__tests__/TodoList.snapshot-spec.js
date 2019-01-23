import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import TodoList from '../TodoList';

const defaultProps = {
  todos: [{
    id: '1',
    text: 'some text',
  }],
  toggleTodo: jest.fn(),
  deleteTodo: jest.fn(),
};

describe('TodoList', () => {
  it('renders without crashing', () => {
    const component = shallow(<TodoList />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('renders with default props', () => {
    const component = shallow(<TodoList {...defaultProps} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
