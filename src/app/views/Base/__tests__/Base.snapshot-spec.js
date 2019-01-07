import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Base from '../Base';

const Child = () => (<span>fake child</span>);

describe('Base', () => {
  it('renders without crashing', () => {
    const component = shallow(<Base><Child /></Base>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
