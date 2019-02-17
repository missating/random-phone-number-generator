// react libraries
import React from 'react';

// thired party libraries
import { shallow } from 'enzyme';

// components
import Button from './';

test('should ', () => {
  const props = {
    name: '',
    className: '',
    disabled: '',
    onClick: jest.fn()
  }
  const wrapper = shallow(<Button {...props} />);

  expect(wrapper).toMatchSnapshot()
});
