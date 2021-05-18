import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
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
                buttonText="Continuar com o Google"
                onSuccess={successResponse}
                onFailure={errorResponse}
            />

            <section>
                <h4>Nome: {data?.name}</h4>
                <p>Email: {data?.email}</p>
                <img src={data?.photo} alt="Photo"/>
            </section>
        </>
    );
};

export default GoogleLoginButton;
