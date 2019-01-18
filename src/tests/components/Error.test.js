import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/Error';

test('should render the error page correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});
