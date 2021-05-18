import React, {useState} from 'react';
import FacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from 'react-facebook-login';
import {environment} from 'environment/environment';
import style from './facebook-login-button.module.css';

const FacebookLoginButton = () => {
    const [data, setData] = useState<any>();

    const successResponse = (response: ReactFacebookLoginInfo) => {
        setData({name: response.name, email: response.email, photo: response.picture?.data.url})
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
                icon="fa-facebook-square"
                cssClass={style.button}
                language="pt-Br"
                textButton="Continuar com o Facebook"
                size="small"
            />

            <section>
                <h4>Nome: {data?.name}</h4>
                <p>Email: {data?.email}</p>
                <img src={data?.photo} alt="Photo"/>
            </section>
        </>
    );
};

export default FacebookLoginButton;
