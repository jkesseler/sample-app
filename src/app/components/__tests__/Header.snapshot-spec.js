import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// The named export is non-memoized component
import { Header } from '../Header';

const defaultProps = {
  menuItems: [{
    path: '/',
    title: 'test',
  }],
};

describe('Header', () => {
  it('renders without crashing', () => {
    const component = shallow(<Header {...defaultProps}>Test</Header>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
