import React, {useCallback} from 'react';

import style from './student-interests.module.css';
import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import RegisterHeader from 'shared/components/RegisterHeader/RegisterHeader';
import Form from 'shared/components/Form/Form';
import {useStudentDataProvider} from 'shared/context/student-sign-up.context';
import InputCep from 'shared/components/InputCep/InputCep';
import {CustomLinearProgress} from '@material/Progress';
import Interests from 'shared/constants/interests.const';
import SelectionChips from 'shared/components/SelectionChips/SelectionChips';
import EStudentSignUpSteps from '../../enum/student-sign-up-steps.enum';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';

const StudentInterests: React.FC = () => {
    const {userData, setUserData, setStep} = useStudentDataProvider();

    const isInvalid = useCallback(
        () => {
            return !userData.locationCity || !userData.locationState || (!userData.interests || userData.interests.length <= 0);
        },
        [userData],
    );

    function onBasicInformationFilled(): void {
        setUserData({
            ...userData,
            interests: userData.interests,
            locationState: userData.locationState,
            locationCity: userData.locationState,
        });

        setStep(EStudentSignUpSteps.WELCOME);
    }

    return (
        <RegisterContainer>
            <div className="slideTopToCenter">
                <RegisterHeader title="Sobre você"/>
                <Form>
                    <div className="formContainer">
                        <InputCep
                            onInvalid={() => setUserData({...userData, locationCity: '', locationState: ''})}
                            onChange={(cep, city, state) => {
                                setUserData({...userData, locationCity: city, locationState: state});
                            }}
                            isRequired={true}
                            label="Qual é o seu CEP?"
                        />

                        <p className={style.description}>
                            <span className={style.emphasis}>O que você tem interesse em aprender?</span> <br/>
                            é possível selecionar quantas áreas quiser
                        </p>

                        <SelectionChips
                            items={Interests}
                            selected={(items) => {
                                setUserData({...userData, interests: items.length > 0 ? items : []});
                            }}
                        />
                    </div>
                </Form>
                <CustomLinearProgress variant="determinate" value={80}/>
            </div>

            <SignUpStepAction
                next={() => onBasicInformationFilled()}
                previous={() => setStep(EStudentSignUpSteps.ABOUT)}
                isNextDisabled={isInvalid()}
                hasPreviousButton={true}
                nextButtonLabel="Próximo"
            />
        </RegisterContainer>
    );
};

export default StudentInterests;
