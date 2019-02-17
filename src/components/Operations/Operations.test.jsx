// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Operations from './';

describe('Operations Component', () => {
  it('should mount correctly', () => {
    const props = {
      phoneNumbers: []
    }

    const wrapper = shallow(<Operations  {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should perform operations on phone numbers if they have been generated', () => {
    const props = {
      phoneNumbers: [
        { randomPhoneNumber: 1234566 },
        { randomPhoneNumber: 986945 }
      ]
    }
    const wrapper = shallow(<Operations {...props} />);
    expect(wrapper).toMatchSnapshot()
  });
});
