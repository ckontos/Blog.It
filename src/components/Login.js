import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startEmailLogin } from '../actions/auth';

export class LoginPage extends React.Component {

    state = {
        error: '',
        email: '',
        password: ''
    };

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }

    onSubmit = () => {
        this.props.startEmailLogin(this.state.email, this.state.password);
    };

    render() {
        return (
            <div className='box-layout'>
                <div className='box-layout__box'>
                    <h1 className='box-layout__title'>Boilerplate</h1>
                    <p>Tag line for app.</p>
                    <form className='form' onSubmit={this.onSubmit}>
                        {this.state.error && <p className='form__error'>{this.state.error}</p>}
                        <input
                            className='text-input'
                            type='email'
                            placeholder='email'
                            autoFocus
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                        <input
                            className='text-input'
                            type='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                        <div>
                            <button className='button'>Login With Email</button>
                        </div>
                        <Link to='/register'>Register Here</Link>
                    </form>
                    {/* <button className='button' onClick={startLogin}>Login With Google</button> */}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startEmailLogin: (email, password) => dispatch(startEmailLogin(email, password))
})

export default connect(undefined, mapDispatchToProps)(LoginPage);