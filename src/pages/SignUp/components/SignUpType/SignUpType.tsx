import React, {useState} from 'react';

import style from './sign-up-type.module.css';
import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import SignUpTypesConst, {SignUpTypes} from './constants/sign-up-types.const';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';
import ISelectedType from './interface/selected-type.interface';
import ESignUpType from './enum/sign-up.enum';

const SignUpType: React.FC<ISelectedType> = ({selectedType}) => {
    const [types] = useState<SignUpTypes[]>(SignUpTypesConst);
    const [typeSelected, setTypeSelected] = useState<ESignUpType>(ESignUpType.COMPANY);

    function highlightSelectedType(index: number): void {
        const element = document.getElementById('items') as HTMLElement;
        const items = Array.from(element.children);

        items.forEach((item, i) => {
            item.classList.remove(style.contentImageNotSelected)

            if (index === i) return;

            item.classList.add(style.contentImageNotSelected);
        });
    }

    return (
        <RegisterContainer>
            <div data-cy="content-container" className="slideTopToCenter">
                <h1 className={style.contentTitle}>Olá</h1>
                <p className={style.contentDescription}>Selecione a categoria que melhor te descreve</p>

                <ul id="items" className={style.contentList}>
                    {
                        types.map((type, index) =>
                            <li className={style.contentListItems} key={index}>
                                <img
                                    draggable={false}
                                    id={`item-${index}`}
                                    className={style.contentImage}
                                    src={type.image}
                                    alt="Tipo de cadastro"
                                    onClick={() => {
                                        setTypeSelected(type.type);
                                        highlightSelectedType(index);
                                    }}
                                />
                            </li>
                        )
                    }
                </ul>

                <SignUpStepAction
                    next={() => selectedType(typeSelected)}
                    isNextDisabled={!typeSelected}
                    nextButtonLabel="Continuar"
                />
            </div>
        </RegisterContainer>
    );
};

export default SignUpType;
