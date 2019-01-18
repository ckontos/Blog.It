import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/Login';

test('should render login component', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call the startLogin button', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
