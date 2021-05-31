import React from 'react';

const DockerFundamentals: React.FC = () => {
    return (
        <>
            <p className={`blogIntroduction paragraph font-3`}>
                Entendendo o que são containers e primeiros comandos Docker!
            </p>

            <p className={`paragraph font-3`}>
                Em 2008 nascia uma empresa cujo objetivo era desenvolver soluções de PaaS (Platform as a Service). Essa
                empresa na época chamada dotCloud, posteriormente passaria a chamar-se Docker, Inc e seria responsável
                por popularizar os chamados containers. O nome dotCloud talvez não seja familiar, mas mas sem dúvida
                você já ouviu falar em containers e mais especificamente em <span className={`emphasis`}>Docker</span>.
            </p>

            <p className={`paragraph font-3`}>
                A ideia de containers está presente na área de tecnologia há bastante tempo, sendo utilizada previamente
                em sistemas Unix/Linux/Solaris. Entretanto nos últimos anos o Docker tornou-se o verdadeiro dono do game
                tanto na comunidade de tecnologia quanto em aplicações empresariais. Muito dessa popularização deve-se
                ao modo como a Docker, Inc reformulou a ideia dos containers e a adoção dessa tecnologia por alguns big
                players como RedHat, Google, Amazon Web Services e Digital Ocean.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>Containers</h2>

            <p className={`paragraph font-3`}>
                No mundo real containers são aquelas caixas enormes de metal que carregam cargas de todos os tipos.
                Carregamentos de peças de carros, suas compras no Ali Express, veículos, enfim, produtos diversos. Agora
                imagine o trabalho que seria transportar tanta coisa aleatória sem os containers. Tudo jogado e
                amontoado. Como seria para organizar e manter tudo seguro? Como todos os itens semelhantes ficariam
                agrupados juntos? E itens de múltiplas peças? Como deixar tudo na ordem correta?
            </p>

            <p className={`paragraph font-3`}>
                A ideia dos containers no mundo da tecnologia parte da mesma ideia e utilidade dos containers de carga
                no mundo real: Padronizar, isolar e transportar.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>Containers vs Virtual Machines</h2>

            <p className={`paragraph font-3`}>
                Containers são utilizados para encapsular e isolar aplicações bem como todas as dependências que sejam
                necessárias para essa aplicação funcionar. E talvez você pense “Ué mas não é isso que uma Máquina
                Virtual (VM) faz?”, e sim, VM’s e containers possuem similaridades mas não são a mesma coisa.
            </p>

            <p className={`paragraph font-3`}>
                Uma VM é o que chamamos de full blown guest, ou seja, ela consome todos os recursos disponíveis para ela
                consumir. Os containers por outro lado consomem apenas a quantidade necessária de recursos, sendo dessa
                forma muito mais leves em comparação com as colegas “fominhas”. Os containers não substituem as máquinas
                virtuais e uma tecnologia não anula a outra. Em realidade ambas as tecnologias tem sido usadas em
                conjunto para aproveitar o melhor dos dois mundos.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>Por quê usar containers?</h2>

            <p className={`paragraph font-3`}>
                Portabilidade, padronização e leveza. Essas são as três principais vantagens de utilizar os containers.
            </p>

            <p className={`paragraph font-3`}>
                Portabilidade pois os ambientes criados podem ser executados em qualquer outra máquina uma vez
                compartilhados através dos chamados Registries, que nada mais são do que “bancos” que armazenam e
                distribuem imagens. O registry padrão é o Docker Hub.
            </p>

            <p className={`paragraph font-3`}>
                A padronização se refere a possibilidade de ter uma ambiente único e estável para a aplicação livre de
                erros causados por configurações específicas de um host.
            </p>

            <p className={`paragraph font-3`}>
                Por fim a leveza tem a ver com já citado consumo de recursos de um container, que compartilha recursos
                com o host e assim é apenas um processo sendo executado ao invés de uma máquina virtual rodando a todo
                vapor.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>Imagens</h2>

            <p className={`paragraph font-3`}>
                Outro conceito importante ao tratar de containers são as imagens. Sendo o container um processo isolado,
                a imagem é o que dá a esse processo seu sistema de arquivos. Por exemplo, comparando com uma máquina
                virtual, nós temos a iso do sistema operacional que desejamos e usamos ela no VirtualBox ou VMware para
                subir nosso sistema operacional. No caso do docker utilizamos as imagens.
            </p>

            <p className={`paragraph font-3`}>
                No DockerHub temos vários ambientes conteinerizados prontos para uso. Imagens de distribuições linux,
                aplicações Flask, Node.js, Redis, Apache e várias outras. Algumas imagens são oficiais, por exemplo a do
                Ubuntu, outras são criadas pelos próprios usuários e compartilhadas. Em resumo, para efeitos de
                comparação o Docker Hub pode ser chamado de “O GitHub dos containers”.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>Comandos Docker</h2>

            <p className={`paragraph font-3`}>
                A utilização do docker é feita através de CLI (Command Line Interface), seja ela Shell, Bash ou o
                próprio terminal do Windows. E por falar em Bash e Terminal a documentação do Docker cobre a instalação
                para vários sistemas operacionais, entretanto se você preferir o passo a passo em vídeo pode dar uma
                olhada em algumas das fontes úteis citadas no final.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>“Puxando” uma imagem</h2>

            <p className={`paragraph font-3`}>
                Para utilizar uma imagem específica precisamos primeiro obter ela, e isso é feito com o comando docker
                pull :
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*pnrBUEngI8IVGW41zXdqRA.png"
                alt="Docker pull"
            />

            <p className={`paragraph font-3`}>
                Nesse exemplo vamos dar o pull em uma imagem Ubuntu.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>Executando</h2>

            <p className={`paragraph font-3`}>
                Uma vez obtida a imagem, para executá-la utilizamos docker run seguido do nome:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*eJccy9M3LutLAPKy5yNssA.png"
                alt="Docker run"
            />

            <p className={`paragraph font-3`}>
                Para ter certeza que a imagem está sendo executada podemos adicionar uma string ao final do comando,
                dessa forma ela irá exibir o texto:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*jAZCdb62oePuKdxP2aKwpA.png"
                alt="Docker run"
            />

            <p className={`paragraph font-3`}>
                O comando docker run funciona mesmo que a imagem não tenha sido previamente obtida. Utilizar docker run
                centOS , por exemplo executaria uma imagem centOS, a diferença é que nesse caso a imagem seria antes
                baixada e só então executada.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>Rodando um container em primeiro ou segundo plano</h2>

            <p className={`paragraph font-3`}>
                Em algumas situações podemos querer rodar o container em primeiro plano, em outras rodar em segundo
                plano. Para escolher qual modo desejamos, inserimos opções adicionais em nossos comandos. O Docker chama
                essas opções de attached (primeiro plano) ou detached (background). Por padrão ele executa em modo
                attached, então para especificar o modo detached utilizamos -d :
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*N0VLBnnEfD9Ev_g2QHumlw.png"
                alt="Docker run"
            />

            <p className={`paragraph font-3`}>
                Esse comando irá gerar uma hash. Para trazer o container de volta para o attached mode utilizamos os
                primeiros caracteres da hash gerada com o comando attach:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*B0TRPfZOo-zoHiLd78smZw.png"
                alt="Docker attach"
            />

            <h2 className={`blogSubTitle font-3 emphasis`}>Acessando o shell interno do container</h2>

            <p className={`paragraph font-3`}>
                Outro ponto importante é que por padrão o docker não tem standard input, ou seja, ele não recebe os
                comando do terminal sem que seja especificado que ele receba, por isso, para obter um shell dentro do
                container indicamos o caminho dele. No nosso caso utilizamos uma imagem ubuntu, o terminal do ubuntu é o
                bash, então /bin/bash , então nosso comando ficará assim:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*jTM7i1dH8TyGG8ev1rhe_Q.png"
                alt="Docker run"
            />

            <p className={`paragraph font-3`}>
                Ao utilizar -it especificamos que queremos que ele execute esse comando em modo interativo e attached.
                Uma vez dentro do container podemos utilizar os comandos linux para fazer o que precisamos. Para sair do
                Bash dentro do container utilizamos o comando exit.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>Listando containers</h2>

            <p className={`paragraph font-3`}>
                Para saber quais imagens temos rodando utilizamos ps:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*pVdkj9f-sLjh1nAstFBupQ.png"
                alt="Docker ps"
            />

            <p className={`paragraph font-3`}>
                Esse comando irá listar todas os containers que estão sendo executados além de vários detalhes sobre
                eles, por exemplo o CONTAINER ID (número identificador do container), IMAGE (nesse caso Ubuntu), STATUS
                (se está rodando ou não), NAME (nomes dados por padrão, que sempre são alguma palavra em inglês
                combinada com o nome de alguma figura importante da ciência e tecnologia).
            </p>

            <p className={`paragraph font-3`}>
                Para listar todos os containers inclusive os que estão parados adicionamos -a ao comando:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*C48eZ0u6-o8jbd7PpHmSLQ.png"
                alt="Docker ps"
            />

            <p className={`paragraph font-3`}>
                O comando ps lista os containers para listar as imagens usamos images, vejamos:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*PDCFnw_Q2EqE-E91mKOHNQ.png"
                alt="Docker images"
            />

            <h2 className={`blogSubTitle font-3 emphasis`}>Obtendo informações detalhadas</h2>

            <p className={`paragraph font-3`}>
                Podemos obter informações específicas e detalhadas sobre um container utilizando o comando docker
                inspect nome_do_container. Esse comando pode ser útil para por exemplo exibir o IP do container, o
                MAC, ou as portas disponíveis. Com o comando ps podemos ver qual o nome do container, e é esse nome que
                utilizamos para inspecionar , veja:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*aLE5C9nTlkrwk7qT0RA4QQ.png"
                alt="Docker inspect"
            />

            <h2 className={`blogSubTitle font-3 emphasis`}>Parando</h2>

            <p className={`paragraph font-3`}>
                O comando docker stop nos permite parar um container em execução utilizando seu ID ou seu NAME:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*JcyNifl9Mz0-vTkFDnMaQg.png"
                alt="Docker stop"
            />

            <h2 className={`blogSubTitle font-3 emphasis`}>Iniciando ou reiniciando</h2>

            <p className={`paragraph font-3`}>
                Uma vez que nosso container já foi executado e parado, podemos rodar ele novamente através do comando
                start :
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*SSH1DjOkRgE-tbpHIWAeOA.png"
                alt="Docker start"
            />

            <p className={`paragraph font-3`}>
                Ou reiniciado com restart:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*6Ex657d6w-tM0yb6FnXLEg.png"
                alt="Docker stop"
            />

            <h2 className={`blogSubTitle font-3 emphasis`}>Removendo</h2>

            <p className={`paragraph font-3`}>
                Para remover completamente um container utilizamos -rm , conforme abaixo:
            </p>

            <img
                draggable={false}
                className={`codeImg mb-250`}
                src="https://miro.medium.com/max/700/1*VXImCfurzxvQDA22Oj12UA.png"
                alt="Docker rm"
            />
        </>
    );
};

export default DockerFundamentals;
