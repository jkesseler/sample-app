import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
// non memoized component
import { Layout } from '../Layout';

const Child = () => (<span>fake child</span>);

describe('Layout', () => {
  it('renders without crashing', () => {
    const component = shallow(<Layout><Child /></Layout>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
