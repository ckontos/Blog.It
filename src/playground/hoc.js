import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (

    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const WithAdminWarning = (WrappedComponent) => {
    
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private info! Please don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const RequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view this info</p>}
        </div>
    );
};

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = RequireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {true} info = 'These are the details' />, document.getElementById('app'));