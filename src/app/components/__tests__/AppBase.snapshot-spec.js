import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import AppBase from '../AppBase';

const Child = () => (<span>fake child</span>);

describe('AppBase', () => {
  it('renders without crashing', () => {
    const component = shallow(<AppBase><Child /></AppBase>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
