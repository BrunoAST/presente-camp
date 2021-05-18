import React from 'react';
import FacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from 'react-facebook-login';
import {environment} from 'environment/environment';

const FacebookLoginButton = () => {
    const successResponse = (response: ReactFacebookLoginInfo) => {
        console.log(response);
    }

    const errorResponse = (response: ReactFacebookFailureResponse) => {
        console.log(response);
    }

    return (
        <FacebookLogin
            appId={environment.FACEBOOK_APP_ID}
            fields="name,email,picture"
            callback={successResponse}
            onFailure={errorResponse}
            icon="fa-facebook-square"
            buttonStyle={{
                textTransform: 'none',
                backgroundColor: 'white',
                padding: '10px',
                color: '#3C5B9A',
                border: 'none',
                boxShadow: '0px 2px 5px 2px rgba(0, 0, 0, .1)'
            }}
            language="pt-Br"
            textButton="Continuar com o Facebook"
            size="small"
        />
    );
}

export default FacebookLoginButton;
