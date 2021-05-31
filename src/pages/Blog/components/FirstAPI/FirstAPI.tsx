import React from 'react';

const FirstAPI: React.FC = () => {
    return (
        <>
            <p className={`blogIntroduction paragraph font-3`}>
                Neste artigo estarei descrevendo uma das muitas formas para se construir uma API Web utilizando os
                recursos do protocolo REST. Utilizaremos aqui o NodeJS, MySQL e alguns dos pacotes do Node.
            </p>

            <p className={`paragraph font-3`}>
                Antes de mais nada vamos criar o nosso banco e a tabela utilizando os seguintes comandos:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/372/1*_KqJhBmLXWY86US4jj42jg.png"
                alt="Comando para criação do banco e da tabela no MySQL"
            />

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Instalar as libs necessárias globalmente e criação do projeto:
            </h2>

            <p className={`paragraph font-3`}>
                Utilizando o terminal de sua preferência, faça a instalação dos seguintes pacotes:
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                npm install -g sequelize-cli express-generator
            </p>

            <p className={`paragraph font-3`}>
                Logo em seguida iremos criar o nosso projeto usando o Express para gerar a estrutura inicial do projeto,
                no terminal, digite o seguinte comando:
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                express –view=pug projeto_rest
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Instalando as dependências do projeto:
            </h2>

            <p className={`paragraph font-3`}>
                Feito isso, navegue até a pasta e instale as dependências do projeto usando o comando:
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                cd projeto_rest && npm install
            </p>

            <p className={`paragraph font-3`}>
                Ainda no terminal, você deverá instalar os pacotes do Sequelize e do MySQL utilizando o seguinte
                comando:
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                npm install — save sequelize –save mysql2
            </p>

            <p className={`paragraph font-3`}>
                Seu projeto já estará com a estrutura pronta e agora podemos ir para a programação.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Configurando o banco:
            </h2>

            <p className={`paragraph font-3`}>
                Antes de configurarmos o arquivo do banco vamos inicializar o Sequelize com o comando sequelize init, ao
                utilizar esse comando, a CLI do Sequelize irá gerar nas pasta do seu projeto os seguintes diretórios:
                migrations, seeders, config e models, juntamente com o arquivo config.json dentro da pasta config.
            </p>

            <p className={`paragraph font-3`}>
                Abra o arquivo config.json na pasta config do projeto, dentro dele você encontrará a seguinte estrutura:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/438/1*5UoHBRjdL-IyJZIZcenLDA.png"
                alt="Arquivo de configurações do banco de dados"
            />

            <p className={`paragraph font-3`}>
                Para configurar o seu banco basta substituir os dados, se a porta que o seu MySQL estiver rodando for
                diferente de 3306, você deverá adicionar essa configuração ao config também após configurar com os seus
                dados, você terá algo parecido com isso:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/369/1*vhs0E492VoUjPCqay5xK7w.png"
                alt="Arquivo de configurações do banco alterado"
            />

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Criando os models e migrations:
            </h2>

            <p className={`paragraph font-3`}>
                Para criar os arquivos de model e migration do User você pode gerar pelo comando no terminal, ou
                escrever o código em um arquivo dentro das respectivas pastas models e migrations, mostrarei aqui o
                comando para gerar a estrutura inicial e depois farei algumas alterações no model:
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                sequelize model:create — name User –attributes id:int,name:string,cpf:string,date_of_birth:date
            </p>

            <p className={`paragraph font-3`}>
                Coloque o comando inteiro em uma linha apenas.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                DAO/Route:
            </h2>

            <p className={`paragraph font-3`}>
                No novo modelo do Express 4 deve-se ter um arquivo de rota para chamá-lo no arquivo app.js/server.js.
                Ressalto aqui que não aplicarei o modelo MVC de fato, mas farei uma adaptação do mesmo. Veja abaixo um
                exemplo do arquivo DAO/route que deve ser criado na pasta routes do seu projeto (se você criou pelo
                comando do terminal basta substituir o código), primeiro, vamos detalhar os requires do arquivo:
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                var express = require(‘express’);
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                var router = express.Router();
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                var model = require(‘../models/index’);
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/503/1*0rkq5a-IMwLvnrRdHz964Q.png"
                alt="Arquivo index.js responsável por ler o config e gerenciar as conexões"
            />

            <p className={`paragraph font-3`}>
                Ok, visto isso vamos voltar para as rotas. Em primeiro lugar temos o GET, com ele direcionamos a
                requisição ao serviço para nos exibir todos os usuários cadastrados, primeiramente o router.get define
                aqui que todas as requisição do tipo GET que tiverem a mesma URI do primeiro parâmetro, no nosso caso
                apenas ”/” irão buscar a função contida em sua estrutura, na função de call-back passamos como parâmetro
                a requisição (dados e cabeçalho), chamamos então a variável de conexão a banco model acessando o método
                findAll de User. Caso haja resultados, a resposta à requisição retornará um JSON contendo os dados
                obtidos na consulta e retornado que não houve nenhum erro, caso contrário, captura o erro ocorrido e
                passa como resposta da requisição. A estrutura é bem parecida para os outros métodos, tendo apenas
                algumas alterações:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/262/1*0l0bnjnEpKqpVqcT4upD3A.png"
                alt="Método GET"
            />

            <p className={`paragraph font-3`}>
                Seguimos então com o POST, que será responsável por controlar as inserções de dados no banco, sua
                estrutura será essa logo abaixo:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/319/1*hDqNljvIW0zWatYywIENGg.png"
                alt="Método POST"
            />

            <p className={`paragraph font-3`}>
                Perceba que a diferença é que aqui passamos como parâmetro da requisição os dados name, cpf e
                date_of_birth que vem no body da requisição, utilizamos o método create passando os mesmos e caso dê
                certo, o método retornará mensagem de sucesso e o código de status 201, se der erro, haverá uma captura
                do erro e será exibido ao usuário.
            </p>

            <p className={`paragraph font-3`}>
                Em terceiro faremos o PUT que irá redirecionar as requisições de alteração dos dados no banco de acordo
                com o seguinte método:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/290/1*kasrus9czqwP9Im74wFX9w.png"
                alt="Método PUT"
            />

            <p className={`paragraph font-3`}>
                A uri da requisição foi alterada para receber um parâmetro que será o id do objeto à ser alterado, temos
                também os dados semelhante ao post e por fim executamos o método update, retornando mensagem de sucesso
                e código de status 201, ou os detalhes do erro, caso aconteça.
            </p>

            <p className={`paragraph font-3`}>
                Por fim temos o delete, que também deverá receber no parâmetro da uri o id que será deletado do banco,
                através do método destroy passando o id como parâmetro do where, a função irá retornar código 201 e
                mensagem de usuário deletado com sucesso, ou retornará a descrição do erro, caso ocorra.
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/322/1*VYZVzfpdfIBYuddEcSCcxw.png"
                alt="Método DELETE"
            />

            <p className={`paragraph font-3`}>
                Finalmente devemos exportar esse modulo do router para utilizarmos no arquivo app.js, veja logo abaixo
                que fiz algumas alterações no arquivo:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/482/1*KKXq9AIWWJ5pgTIf-BxADw.png"
                alt="App.js, arquivo inicial do nosso serviço que servirá como o controller de uris."
            />

            <p className={`paragraph font-3`}>
                Utilizando o comando app.use() defino nos parâmetros o objeto da rota e a uri que deverá ser utilizada
                para requisitar essa rota. Também coloquei aqui uma implementação de CORS, não irei falar sobre, mas
                futuramente estarei escrevendo um artigo sobre o assunto. Há alguns métodos para captura de erros para
                os caso de 404 e 500, por fim o comando app.listen serve para definir a porta que o servidor irá rodar.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Rodando a api:
            </h2>

            <p className={`paragraph font-3`}>
                Para rodar a nossa api através do terminal localize a pasta do projeto e use o comando:
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                node app
            </p>

            <p className={`paragraph font-3`}>
                Se tudo der certo, irá aparecer na saída do terminal o console.info que deixamos na chamada da função do
                app.listen.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Vamos testar então:
            </h2>

            <p className={`paragraph font-3`}>
                Já que não temos nenhum dado no banco irei fazer o POST primeiro, na interface do postman, tenha a
                estrutura abaixo:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/545/1*U8onPiDqWGobujGi25Kj-w.png"
                alt="Método POST no Postman."
            />

            <p className={`paragraph font-3`}>
                No body da requisição informe os dados desejados utilizando a formatação raw do tipo application/json. O
                resultado será exibido logo à baixo retornando dados criados, mensagem de sucesso e código 201.
            </p>

            <p className={`paragraph font-3`}>
                Farei outro post aqui para termos 2 dados, veja agora o método GET com os dois usuários:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/567/1*M1s84OK2HnDPJwmDVDnG9w.png"
                alt="Método GET no Postman."
            />

            <p className={`paragraph font-3`}>
                Vejam que o GET já me retorna os valores cadastrados e o status 200.
            </p>

            <p className={`paragraph font-3`}>
                Vamos alterar o usuário João Ferreira Leite através do PUT:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/567/1*uQNCB7cFQSdrIYBOAZRQuQ.png"
                alt="Método PUT no Postman."
            />

            <p className={`paragraph font-3`}>
                Mensagem de sucesso e status 201. Veja que aqui passamos na uri o parâmetro 3 indicando o id que
                alteramos.
            </p>

            <p className={`paragraph font-3`}>
                Por último, faremos a operação de exclusão:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/567/1*nzucpiizE_ocCsT7DQ4a9A.png"
                alt="Método DELETE no Postman."
            />

            <p className={`paragraph font-3`}>
                Mensagem de sucesso e código de status 201. Novamente utilizamos o id como parâmetro informando qual
                usuário iríamos deletar.
            </p>

            <p className={`paragraph font-3 mb-250`}>
                E aí está, sua primeira API REST utilizando o NodeJS juntamente com Sequelize, Express e MySQL, espero
                que tenham gostado do artigo, deixem o seu feedback para que eu esteja melhorando nos próximos artigos e
                trazendo um melhor conteúdo para ajudar a comunidade. Meu intuito aqui é única e exclusivamente trazer
                maior facilidade para todos que assim como eu estão começando em suas carreiras como desenvolvedores, ou
                até para profissionais experientes mas que nunca tenham trabalhado com NodeJS, obrigado a todos, e até a
                próxima.
            </p>
        </>
    );
};

export default FirstAPI;
