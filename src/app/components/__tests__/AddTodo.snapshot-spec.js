import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import AddTodo from '../AddTodo';

describe('AddTodo', () => {
  it('renders without crashing', () => {
    const component = shallow(<AddTodo />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
