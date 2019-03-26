import React from 'react';
import { connect } from 'react-redux';
import { registerEmailLogin } from '../actions/auth';

export class RegisterPage extends React.Component {

    state = {
        error: '',
        email: '',
        password: '',
        confirmedPassword: ''
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }
    onconfirmedPasswordChange = (e) => {
        const confirmedPassword = e.target.value;
        this.setState(() => ({ confirmedPassword }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.password !== this.state.confirmedPassword) {
            const error = 'Passwords did not match'
            this.setState(() => ({ error }));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit(this.state.email, this.state.password)
        }
        
    };

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form__error'>{this.state.error}</p>}
                    <input 
                        className='text-input'                        
                        type='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <input 
                        className='text-input'                        
                        type='password'
                        placeholder='Desired Password'
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    <input 
                        className='text-input'                        
                        type='password'
                        placeholder='Confirm Password'
                        value={this.state.confirmedPassword}
                        onChange={this.onconfirmedPasswordChange}
                    />
                    <div>
                        <button className='button'>Create Account</button>
                    </div>
                </form>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (email, password) => dispatch(registerEmailLogin(email, password))
})

export default connect(undefined, mapDispatchToProps)(RegisterPage);