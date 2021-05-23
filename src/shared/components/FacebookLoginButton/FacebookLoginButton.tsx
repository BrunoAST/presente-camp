import React, {useState} from 'react';
import FacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from 'react-facebook-login';

import facebook from 'assets/Icons/Facebook.svg';
import {environment} from 'environment/environment';

const FacebookLoginButton = () => {
    const [data, setData] = useState<any>();

    const successResponse = (response: ReactFacebookLoginInfo) => {
        setData({name: response.name, email: response.email, photo: response.picture?.data.url});
        console.log(response)
    }

    const errorResponse = (response: ReactFacebookFailureResponse) => {
        console.log(response);
    }

    return (
        <>
            <FacebookLogin
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
