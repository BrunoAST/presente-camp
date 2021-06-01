import React from 'react';
import FacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from 'react-facebook-login';

import facebook from 'assets/Icons/Facebook.svg';
import {environment} from 'environment/environment';
import IFacebookLoginButton from './interface/facebook-login-button.interface';

const FacebookLoginButton: React.FC<IFacebookLoginButton> = ({onUserSelected}) => {
    const successResponse = (response: ReactFacebookLoginInfo) => {
        onUserSelected({
            name: response.name as string,
            email: response.email as string,
            id: response.id
        });
    }

    const errorResponse = (response: ReactFacebookFailureResponse) => {
        console.log(response);
    }

    return (
        <>
            <FacebookLogin
                isDisabled={true}
                appId={environment.FACEBOOK_APP_ID}
                fields="name,email,picture"
                callback={successResponse}
                onFailure={errorResponse}
                icon={<img src={facebook} alt="Facebook" />}
                cssClass="socialButton"
                language="pt-Br"
                textButton=""
                size="small"
            />
        </>
    );
};

export default FacebookLoginButton;
