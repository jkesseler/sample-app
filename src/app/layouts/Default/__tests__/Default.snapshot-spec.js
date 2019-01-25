import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Default } from '../Default';

const Child = () => (<span>fake child</span>);

describe('Default', () => {
  it('renders with footer', () => {
    const component = shallow(<Default title="Title" displayFooter><Child /></Default>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('renders without footer', () => {
    const component = shallow(<Default title="Title" displayFooter={false}><Child /></Default>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
