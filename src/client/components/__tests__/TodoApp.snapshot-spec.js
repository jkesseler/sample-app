import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import TodoApp from '../TodoApp';

describe('TodoApp', () => {
  it('renders without crashing', () => {
    const component = shallow(<TodoApp />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
