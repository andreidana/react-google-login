import React from 'react';
import GoogleLogin from 'react-google-login';

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <GoogleLogin
      clientId="650131240260-uqclc5b7ck7smk4i9rese6q835im2ma2.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick}>This is my custom Google button</button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Login;
