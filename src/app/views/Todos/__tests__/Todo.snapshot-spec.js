import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Todos from '../Todos';

describe('TodoApp', () => {
  it('renders without crashing', () => {
    const component = shallow(<Todos />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
