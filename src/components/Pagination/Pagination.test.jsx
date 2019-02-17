// react libraries
import React from 'react';

// third party libraries
import { shallow } from 'enzyme';

// components
import Pagination from './';

describe('Pagination Component', () => {
  it('should mount correctly', () => {
    const props = {
      pages: 5,
      onPageChange: jest.fn()
    }

    const wrapper = shallow(<Pagination {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
