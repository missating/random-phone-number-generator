// react libraries
import React from 'react';

// thired party libraries
import { shallow } from 'enzyme';

// components
import DisplayPhoneNumbers from './';

describe('DisplayPhoneNumbers Component', () => {
  it('should mount correctly', () => {
    const props = {
      phoneNumbers: [
        { randomPhoneNumber: 223344 },
        { randomPhoneNumber: 556677 },
        { randomPhoneNumber: 889900 },
      ]
    };

    const wrapper = shallow(<DisplayPhoneNumbers {...props} />);

    expect(wrapper).toMatchSnapshot()
  });

  it('should call the onPageChange methiod correctly', () => {
    const props = {
      phoneNumbers: [
        { randomPhoneNumber: 223344 },
        { randomPhoneNumber: 556677 },
        { randomPhoneNumber: 889900 },
      ]
    };

    const phoneNumbers = [
      { randomPhoneNumber: 223344 },
      { randomPhoneNumber: 556677 },
      { randomPhoneNumber: 889900 },
    ]
    const wrapper = shallow(<DisplayPhoneNumbers {...props} />);
    const instance = wrapper.instance();
    wrapper.setState({ generatedPhoneNumbers: phoneNumbers });
    const data = {
      selected: ''
    }
    instance.onPageChange(data);
    expect(wrapper.state().generatedPhoneNumbers).toEqual(phoneNumbers)
  });

  it('should get derived state from props', () => {
    const props = {
      phoneNumbers: [
        { randomPhoneNumber: 223344 },
        { randomPhoneNumber: 556677 },
        { randomPhoneNumber: 889900 },
      ],
      hasGeneratedNumbers: true
    };
    const state = {  // eslint-disable-line
      currentPage: 1
    };

    const wrapper = shallow(<DisplayPhoneNumbers {...props} />);
    expect(wrapper.state().currentPage).toEqual(1);
  });
});
