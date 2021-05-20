import React, {useState} from 'react';
import {ContainedButton, DefaultButton} from '@material/Button';

import style from './sign-up-type.module.css';
import RegisterContainer from '../../shared/components/RegisterContainer/RegisterContainer';
import SignUpTypesConst, {SignUpTypes} from './constants/sign-up-types.const';

const SignUpType = () => {
    const [types] = useState<SignUpTypes[]>(SignUpTypesConst);
    const [selectedType, setSelectedType] = useState<SignUpTypes>();

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
            <h1 className={style.contentTitle}>Olá</h1>
            <p className={style.contentDescription}>Selecione a categoria que melhor te descreve</p>

            <ul id="items" className={style.contentList}>
                {
                    types.map((type, index) =>
                        <li className={style.contentListItems} key={index}>
                            <img
                                id={`item-${index}`}
                                className={style.contentImage}
                                src={type.image}
                                alt="Tipo de cadastro"
                                onClick={() => {
                                    setSelectedType(type);
                                    highlightSelectedType(index);
                                }}
                            />
                        </li>
                    )
                }
            </ul>

            {/*ACTIONS*/}
            <ContainedButton
                variant="contained"
                type="button"
                className="mb-12"
                disabled={!selectedType}
            >
                Selecionar e continuar
            </ContainedButton>

            <DefaultButton type="button">
                Voltar
            </DefaultButton>
        </RegisterContainer>
    );
};

export default SignUpType;
