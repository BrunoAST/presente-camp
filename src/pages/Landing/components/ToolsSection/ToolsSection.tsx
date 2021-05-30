import React from 'react';
import Tools from '../Tools/Tools';

import style from './tools-section.module.css';

const ToolsSection: React.FC = () => {
    return (
        <section className={style.toolsContainer}>
            <div>
                <h1 className={style.toolsTitle}>Aqui você pode</h1>

                <p className={`${style.toolsParagraph} mt-24 mb-32`}>
                    Graças a <span className="purple-fg">empresas incríveis </span>
                    nos tornamos uma comunidade cada vez maior e autosuficiente
                </p>

                <Tools/>
            </div>

            <article>
                <p className={`${style.toolsDescription} mt-16`}>
                    Atualmente no Brasil existem mais de 14,4 milhões de pessoas desempregadas, onde o desemprego tem
                    como principal fomentador a falta de mão-de-obra qualificada e o custo elevado do nível de educação
                    exigido pelo mercado de trabalho. Pensando nisso surge o Presente, um projeto com foco na
                    qualificação educacional de minorias – o grupo mais afetado pelo desemprego – e conexões que buscam
                    inserí-las em empresas que lutam pelos mesmos principal.
                </p>
                <br/>
                <p className={style.toolsDescription}>
                    Graças a empresas incríveis nos tornamos uma comunidade cada vez maior e autossuficiente. Através
                    dessas empresas novos conteúdos desejados pelo mercado de trabalho tecnológico são detectados e
                    juntos formulamos meios para trazê-los até você! desde materiais de leitura em nosso blog à cursos
                    de soft skills e dos softwares mais utilizados.
                </p>
            </article>
        </section>
    );
};

export default ToolsSection;
