import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SimpleMenu from '../SimpleMenu';

const defaultProps = {
  menuItems: [{
    path: '/',
    title: 'test',
  }],
};

describe('SimpleMenu', () => {
  it('renders without crashing', () => {
    const component = shallow(<SimpleMenu {...defaultProps} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
