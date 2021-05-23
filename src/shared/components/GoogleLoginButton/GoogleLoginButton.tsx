import React from 'react';

import GoogleLogin, {GoogleLoginProps, GoogleLoginResponse} from 'react-google-login';
import google from 'assets/Icons/Google.svg';
import {environment} from 'environment/environment';
import IGoogleLoginButton from './interface/google-login-button.interface';

const GoogleLoginButton: React.FC<IGoogleLoginButton> = ({onUserSelected}) => {
    function successResponse(response: GoogleLoginResponse): void {
        const profile = response.getBasicProfile();

        onUserSelected({
            name: profile.getName(),
            email: profile.getEmail(),
            id: profile.getId()
        });
    }

    function errorResponse({onFailure}: GoogleLoginProps): void {
        console.error(onFailure);
    }

    return (
        <GoogleLogin
            clientId={environment.GOOGLE_CLIENT_ID}
            render={renderProps => (
                <button
                    className="socialButton"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                >
                    <img src={google} alt="Facebook"/>
                </button>
            )}
            buttonText=""
            onSuccess={(res) => successResponse(res as GoogleLoginResponse)}
            onFailure={errorResponse}
            cookiePolicy="single_host_origin"
        />
    );
};

export default GoogleLoginButton;
