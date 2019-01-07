import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// The named export is non-memoized component
import { Header } from '../Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const component = shallow(<Header />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
