// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// page
import { Home } from './';

jest.mock('file-saver', () => ({
  saveAs: jest.fn(),
}));

describe('Home Page', () => {
  it('should mount correctly', () => {
    const props = {
      phoneNumbers: []
    }

    const wrapper = shallow(<Home {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the onChange method when input value changes', () => {
    const props = {
      phoneNumbers: ['1', '2'],
      onChange: jest.fn(),
    };

    const inputChangeEvent = {
      target: {
        value: '6',
        name: 'number',
      },
    };

    const wrapper = shallow(<Home {...props} />);
    wrapper.find('input').simulate('change', inputChangeEvent);
    expect(wrapper.state().generatingValue).toEqual('6');
  });

  it('should call the onAddGeneratingValue method when a user has inputted a value', () => {
    const props = {
      phoneNumbers: [],
      generatePhoneNumbers: jest.fn()
    };
    const wrapper = shallow(<Home {...props} />);
    wrapper.setState({ generatingValue: '' })
    const instance = wrapper.instance();
    instance.onAddGeneratingValue();
  });

  it('should sort the generated numbers in ascending order when the method is called', () => {
    const props = {
      phoneNumbers: [],
      sortPhoneNumbersAscending: jest.fn(),
      sortPhoneNumbersDescending: jest.fn()
    };
    const wrapper = shallow(<Home {...props} />);
    const event = {
      target: {
        value: "Ascending"
      }
    };
    const instance = wrapper.instance();
    instance.onSortPhoneNumbers(event);

    expect(props.sortPhoneNumbersAscending).toHaveBeenCalled();
  });

  it('should sort the generated numbers in descending order when the method is called', () => {
    const props = {
      phoneNumbers: [],
      sortPhoneNumbersAscending: jest.fn(),
      sortPhoneNumbersDescending: jest.fn()
    };
    const wrapper = shallow(<Home {...props} />);
    const event = {
      target: {
        value: "Descending"
      }
    };
    const instance = wrapper.instance();
    instance.onSortPhoneNumbers(event);

    expect(props.sortPhoneNumbersDescending).toHaveBeenCalled();
  });

  it('should download the generated phone numbers when the method is called', () => {
    const props = {
      phoneNumbers: [
        {
          randomPhoneNumber: 12345
        },
        {
          randomPhoneNumber: 67890
        }
      ]
    }
    const wrapper = shallow(<Home {...props} />);
    const instance = wrapper.instance();

    instance.onDownloadPhoneNumbers();

    expect(wrapper).toMatchSnapshot()
  });
});
