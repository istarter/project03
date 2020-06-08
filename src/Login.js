import React from 'react';

function Login(props) {
    return(
        <div>
            <p> user name:  {props.username}  Password: {props.pass} </p>
        </div>
    );
}

export default Login;