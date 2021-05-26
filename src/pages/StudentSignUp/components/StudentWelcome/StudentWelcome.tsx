import React from 'react';
import {useNavigate} from 'react-router-dom';

import style from './student-welcome.module.css';
import valeu from 'assets/Background/CadastroValeu.png';
import RegisterHeader from 'shared/components/RegisterHeader/RegisterHeader';
import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import {CustomLinearProgress} from '@material/Progress';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';
import {BrowserRoutes} from 'shared/constants/browser-route.const';

const StudentWelcome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <RegisterContainer>
            <div className="slideTopToCenter">
                <RegisterHeader title="Muito obrigad@!"/>

                <img className={`${style.image} mt-32`} src={valeu} alt="Cadastro finalizado"/>

                <p className={`font-3 paragraph textCentered mt-32 mb-48`}>
                    <span className={`emphasis`}>Que comecem os estudos!</span> <br/>
                    Aqui daremos início a nossa parceria em busca de um futuro mais justo e diverso.
                </p>

                <CustomLinearProgress variant="determinate" value={100} />

                <SignUpStepAction
                    next={() => navigate(BrowserRoutes.SIGN_IN)}
                    previous={() => navigate(BrowserRoutes.LANDING)}
                    hasPreviousButton={true}
                    nextButtonLabel="Entrar"
                    previousButtonLabel="Voltar para página inicial"
                />
            </div>
        </RegisterContainer>
    );
};

export default StudentWelcome;
