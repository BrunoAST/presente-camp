import React, {useState} from 'react';
import FacebookLogin, {ReactFacebookFailureResponse, ReactFacebookLoginInfo} from 'react-facebook-login';
import {environment} from 'environment/environment';

const FacebookLoginButton = () => {
    const [data, setData] = useState<any>();

    /*toast.success('🦄 Wow so easy!', {
        position: 'top-right',
        pauseOnHover: true,
    });*/

    const successResponse = (response: ReactFacebookLoginInfo) => {
        setData({ name: response.name, email: response.email, photo: response.picture?.data.url })
    }

    const errorResponse = (response: ReactFacebookFailureResponse) => {
        console.log(response);
    }

    return (
        <>
            {/*<ToastContainer />*/}
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

            <section>
                <h4>Nome: {data?.name}</h4>
                <p>Email: {data?.email}</p>
                <img src={data?.photo} alt="Photo"/>
            </section>
        </>
    );
};

export default FacebookLoginButton;
