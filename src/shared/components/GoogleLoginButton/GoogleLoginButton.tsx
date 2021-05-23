import React, {useState} from 'react';

import GoogleLogin from 'react-google-login';
import google from 'assets/Icons/Google.svg';
import {environment} from 'environment/environment';

const GoogleLoginButton = () => {
    const [data, setData] = useState<any>();

    const successResponse = (response: any) => {
        const profile = response.getBasicProfile();
        const id = response.getId();
        const token = response.accessToken;

        console.log({profile, id, token});

        setData({name: profile.getName(), email: profile.getEmail(), photo: profile.getImageUrl()})
    }

    const errorResponse = (response: any) => {
        console.log(response);
    }

    return (
        <>
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
                onSuccess={successResponse}
                onFailure={errorResponse}
                cookiePolicy="single_host_origin"
            />
        </>
    );
};

export default GoogleLoginButton;
