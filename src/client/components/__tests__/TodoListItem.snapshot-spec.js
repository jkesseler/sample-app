import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// non memoized component
import { TodoListItem } from '../TodoListItem';

const defaultProps = {
  divider: true,
  checked: false,
};

const requiredProps = {
  text: 'some string',
  onButtonClick: () => {},
  onCheckboxToggle: () => {},
};

const allProps = { ...defaultProps, ...requiredProps };

describe('TodoListItem', () => {
  it('renders with only required props', () => {
    const component = shallow(<TodoListItem {...requiredProps} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('renders with only all props', () => {
    const component = shallow(<TodoListItem {...allProps} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
