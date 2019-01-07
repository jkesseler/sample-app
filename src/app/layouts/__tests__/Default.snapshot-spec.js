import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Default from '../Default';

const Child = () => (<span>fake child</span>);

describe('Base', () => {
  it('renders without crashing', () => {
    const component = shallow(<Default><Child /></Default>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
