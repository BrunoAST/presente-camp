import React from 'react';

import style from './indication.module.css';
import indication1 from 'assets/Content/Blog/Indication/Indication1.svg';
import indication2 from 'assets/Content/Blog/Indication/Indication2.svg';
import indication3 from 'assets/Content/Blog/Indication/Indication3.svg';
import useIsMobile from 'shared/hooks/useIsMobile';

const Indication: React.FC = () => {
    const {isMobile} = useIsMobile()

    return (
        <>
            <p className={`blogIntroduction paragraph font-3`}>
                Que tal começar o mês colocando algumas referências em dia? Para te ajudar nessa missão preparamos uma
                lista com conteúdos audiovisuais, podcast, livro e uma dica de ferramenta
                para te apresentar novas perspectivas
            </p>

            <div className={style.indicationColumn}>
                {!isMobile && <img width={300} src={indication1} alt="Filmes e séries"/>}

                <div>
                    <h2 className={`blogSubTitle font-3 emphasis`}>Filme e Série</h2>
                    <p className={`paragraph font-3`}>
                        <span className="emphasis">Helvética </span> é um filme americano independente lançado em 2007
                        para os 50 anos da tipografia! Vale a pena conferir a história por trás de uma
                        fonte tipográfica que ganhou um documentário.
                        Por outro lado descubra como pensam os designers mais inovadores em diferentes áreas e saiba
                        como seu trabalho influencia todos os aspectos da nossa vida em
                        <span className="emphasis">Abstract: The art of Design</span>
                    </p>
                </div>

                {isMobile && <img width={300} src={indication1} alt="Filmes e séries"/>}
            </div>

            <div className={`${style.indicationColumn} mt-24`}>
                <div>
                    <h2 className={`blogSubTitle font-3 emphasis`}>Podcast e livro</h2>
                    <p className={`paragraph font-3`}>
                        Prefere outro meio de consumir conteúdos? não se preocupe!
                        Separamos aqui também duas indicações super legais para você! O podcast da Startup
                        brasileira <span className="emphasis">ioasys </span>, sobre processos criativos e inovação, e o
                        livro <span className="emphasis">Big Tech: A ascensão
                        dos dados e a morte da política</span> do Autor Evgeny Morov, colunista do The Guardian.
                    </p>
                </div>

                <img width={300} src={indication2} alt="Podcast e livro"/>
            </div>

            <div className={`${style.indicationColumn} mt-24 mb-250`}>
                {!isMobile && <img width={300} src={indication3} alt=" Bancos de imagens e representatividade"/>}

                <div>
                    <h2 className={`blogSubTitle font-3 emphasis`}>
                        Bancos de imagens e representatividade
                    </h2>
                    <p className={`paragraph font-3`}>
                        É necessário aprofundarmos a discussão sobre o papel de marcas, produtos e serviços na promoção
                        da diversidade. Dessa forma, o projeto Tem que Ter busca levar esse questionamento ao
                        mercado, mostrando, através de uma plataforma colaborativa, o acesso a imagens que
                        representem e deem visibilidade à comunidade LGBTI+.
                    </p>
                </div>

                {isMobile && <img width={300} src={indication3} alt=" Bancos de imagens e representatividade"/>}
            </div>
        </>
    );
};

export default Indication;
