import React from 'react';

import style from './impediments.module.css';

const Impediments: React.FC = () => {
    return (
        <>
            <p className={`blogIntroduction paragraph font-3`}>
                Impedimento é uma palavra que carrega consigo uma série de questões e é vista como um sinal de alerta no
                âmbito profissional. Não é à toa que ela é um indicador de que algo não aconteceu como previsto e pode
                trazer consequências.
                Vamos entender o que é essa palavra e como ela se aplica no contexto de projetos ágeis.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>O que é um impedimento?</h2>

            <p className={`paragraph font-3`}>
                “Domingo de manhã. Você acorda cedo e ao abrir a janela percebe que é mais um lindo dia de verão e então
                decide ir à praia com a família. Depois de preparar o kit praia, é hora de colocar tudo no porta-malas e
                partir.
            </p>

            <p className={`paragraph font-3`}>
                Ao chegar no estacionamento você percebe que um dos pneus do seu carro está furado e aí, aquela alegria
                toda vira frustração, já que agora você não conseguirá ir à praia. Nesse momento o melhor a se fazer é
                parar e pensar se a situação é contornável ou se realmente existe um impedimento”.
            </p>

            <p className={`paragraph font-3`}>
                Impedimento, segundo o dicionário, é aquilo que impede; estorvo, obstáculo; estado de pessoa impedida,
                por qualquer causa, de cumprir os deveres de seu cargo. Ou seja, a pessoa não tem como executar o que se
                pretende visto que existe algo em seu caminho a qual ela, por si só, não pode resolver.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis mt-24`}>Será que é mesmo um impedimento?</h2>

            <p className={`paragraph font-3`}>
                O pneu furado pode ser, de fato, um impedimento, mas antes de classificá-lo como tal, um olhar mais
                cuidadoso se faz necessário. Isto é, se encontrarmos uma alternativa, como por exemplo o uso do pneu
                estepe, o impedimento será apenas um contratempo que poderá ser contornado.
            </p>

            <p className={`paragraph font-3`}>
                Levando o conceito para projetos, os impedimentos estão relacionados à incapacidade de se entregar o que
                foi acordado, seja em uma sprint ou no projeto como um todo, o que compromete o resultado esperado para
                o time, que precisa buscar alternativas e se adaptar ao novo cenário.
            </p>

            <p className={`paragraph font-3`}>
                A história contada acima ilustra algo recorrente no dia a dia de times de projetos ágeis: devem ser
                auto-organizáveis, mas são passíveis de impedimentos e, muitas vezes, por motivos adversos, apontam
                impedimentos que na verdade não são.
            </p>

            <p className={`paragraph font-3`}>
                Em situações como essa, onde a adversidade pode ser contornada, o Agile Master precisa avaliar o cenário
                e identificar se o motivo apresentado não está sendo usado como uma postergação de algo que precisa ser
                realizado.
            </p>

            <p className={`paragraph font-3`}>
                Times que só reportam impedimentos, mas não conseguem resolvê-los internamente, deixam de ser ágeis,
                pois se tornam parte do problema e não da solução.
            </p>

            <p className={`paragraph font-3`}>
                Não existem normas. Impedimentos podem surgir de todos os lados, seja uma regra de negócio mal definida,
                um acesso não liberado, uma queda de conexão, uma entrega do outro time que não foi realizada a tempo e
                tantos outros.
            </p>

            <p className={`paragraph font-3`}>
                No uso de um framework ágil gerir impedimentos pode ser ainda mais difícil, já que não temos plena
                certeza do caminho que será percorrido e a nossa visão dos desenvolvimentos futuros é menor, pois o
                planejamento está limitado a duas ou no máximo três sprints o que gera iterações mais curtas,
                consequentemente o tempo de resposta para a remoção dos impedimentos pode comprometer a meta de uma
                sprint.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis mt-24`}>Impedimento detectado, o que fazer?</h2>

            <p className={`paragraph font-3`}>
                Após identificar um impedimento, existem alguns passos que ajudarão na sua resolução:
            </p>

            <ol className={style.firstLevelList}>
                <li className={`paragraph font-3`}>
                    Dê visibilidade ao impedimento:

                    <ul className={style.secondLevelList}>
                        <li className={`paragraph font-3`}>
                            Caso seja um problema já conhecido e você tenha autonomia para saná-lo, faça-o. Não espere
                            pelo Agile Master;
                        </li>
                        <li className={`paragraph font-3`}>
                            Se a solução exigir mais tempo, informe o cliente e evite surpresas futuras. Lembre-se:
                            transparência é fundamental para os frameworks ágeis.
                        </li>
                    </ul>
                </li>

                <li className={`paragraph font-3`}>
                    Não espere para agir:

                    <ul className={style.secondLevelList}>
                        <li className={`paragraph font-3`}>
                            Analise a situação e o impacto desse impedimento. Será que você não deve tomar uma ação
                            agora? Aguardar a daily no dia seguinte pode ser ruim, pois uma bola de neve pode se formar;
                        </li>
                    </ul>
                </li>

                <li className={`paragraph font-3`}>
                    Enquanto as ações para solucionar o impedimento estiverem sendo realizadas, execute a próxima
                    atividade conforme a prioridade:

                    <ul className={style.secondLevelList}>
                        <li className={`paragraph font-3`}>
                            Antecipar as atividades que não foram impactadas pelo impedimento compensará o tempo extra
                            gerado para a resolução dele;
                        </li>

                        <li className={`paragraph font-3`}>
                            Lembre-se: segundo o Manifesto Ágil, responder as mudanças é mais importante do que seguir
                            um plano.
                        </li>
                    </ul>
                </li>
            </ol>

            <p className={`paragraph font-3`}>
                Os passos apresentados acima ajudam muito na orientação, mas cada caso terá suas especificidades.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis mt-24`}>
                O importante é não ficar parado
            </h2>

            <p className={`paragraph font-3`}>
                Veja mais algumas dicas que podem ajudar na identificação e resolução rápida dos impedimentos:
            </p>

            <ol className={style.firstLevelList}>
                <li className={`paragraph font-3`}>
                    Dê atenção as dailies: Preste atenção ao que o time está expondo. As vezes a dificuldade para
                    resolver um caso, a falta de uma conversa com o Product Owner, retrabalhos ou atrasos podem estar
                    escondendo um impedimento.
                </li>

                <li className={`paragraph font-3`}>
                    Algo que não é um impedimento agora, pode se tornar um no futuro.
                </li>

                <li className={`paragraph font-3`}>
                    As planning e reuniões de refinamento também são ótimas oportunidades para identificar problemas
                    atuais e futuros.
                </li>

                <li className={`paragraph font-3`}>
                    Conforme descrito no Scrum Guide, impedimentos são atribuídos como responsabilidade do Scrum Master.
                    Qualquer dúvida peça apoio a ele.
                </li>

                <li className={`paragraph font-3`}>
                    Usar ferramentas que ajudem o time na hora de uma decisão pode auxiliar no empoderamento e na
                    delegação de responsabilidade para o time.

                    <ul className={style.secondLevelList}>
                        <li className={`paragraph font-3`}>
                            O Delegation Poker é um bom exemplo de ferramenta, assim como o gráfico burndown que auxilia
                            na identificação dos impedimentos, já que os desvios apresentados pelo gráfico podem ser
                            indícios de problemas.
                        </li>

                    </ul>
                </li>

                <li className={`paragraph font-3`}>
                    Discutir os casos e as soluções utilizadas avaliando se a solução é definitiva ou se existe alguma
                    probabilidade de acontecer novamente, evita que os impedimentos sejam utilizados como “muletas” para
                    ocultar outros problemas.
                </li>

                <li className={`paragraph font-3`}>
                    Torne o caso e a solução conhecida para todos. Isso irá gera economia de tempo em caso de
                    recorrência. Não há necessidade de uma documentação extensa, apenas o necessário para gerar
                    conhecimento aplicável.
                </li>
            </ol>

            <img
                className="banner mb-250"
                src="https://i1.wp.com/blog.iteris.com.br/wp-content/uploads/2020/07/ConTROL.png?resize=789%2C516&ssl=1"
                alt="Control"
            />
        </>
    )
};

export default Impediments;
