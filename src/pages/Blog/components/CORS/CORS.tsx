import React from 'react';

import cors from 'assets/Content/Blog/CORS/CORS.png'

const CORS: React.FC = () => {
    return (
        <>
            <p className={`blogIntroduction paragraph font-3`}>
                O CORS (Cross-origin Resource Sharing) é um mecanismo utilizado pelos navegadores para compartilhar
                recursos entre diferentes origens. O CORS é uma especificação do W3C e faz uso de headers do HTTP para
                informar aos navegadores se determinado recurso pode ser ou não acessado.
            </p>

            <p className={`paragraph font-3`}>
                Para compreender melhor, imagine que você está desenvolvendo uma aplicação web que consiste em uma SPA e
                uma API. Tudo ocorre sem problemas no seu ambiente local, mas ao fazer o deploy em produção você se
                depara com isso:
            </p>

            <img
                draggable={false}
                width="100%"
                className={`codeImg`}
                src="https://dkrn4sk0rn31v.cloudfront.net/2020/04/12181347/erro_cors.jpg"
                alt="CORS"
            />

            <p className={`paragraph font-3`}>
                Isso acontece devido a um mecanismo de segurança presentes nos navegadores chamado de same-origin
                policy. Ele é usado para limitar como um documento ou script de uma origem pode interagir com recursos
                de outra origem.
            </p>

            <p className={`paragraph font-3`}>
                Entenda como origem a combinação entre o protocolo (http ou https), o host e a
                porta (80 ou 443, podendo ser omitida) de um determinado endereço. Se
                a origem de duas URLs forem idênticas, a interação entre esses recursos pode acontecer sem problema.
            </p>

            <p className={`paragraph font-3`}>
                Por exemplo, considere a seguinte URL: http://painel.treinaweb.com.br/perfil/. Alguns exemplos de URLs
                com same-origin considerando a origem são http://painel.treinaweb.com.br/ e
                http://painel.treinaweb.com.br/cursos/. Nesses casos a única alteração está no path, com o início da URL
                igual.
            </p>

            <p className={`paragraph font-3`}>
                Agora, as seguintes URLs seriam bloqueadas: https://painel.treinaweb.com.br/perfil/,
                http://painel.treinaweb.com.br:81/perfil/index.html, http://www.treinaweb.com.br/. No primeiro caso, o
                protocolo é diferente (https), no segundo caso temos outra porta e, por fim, o subdomínio do host é
                diferente.
            </p>

            <p className={`paragraph font-3`}>
                Em todos esses casos você está sujeito a uma requisição controlada por CORS:
            </p>

            <img
                draggable={false}
                className={`my-24`}
                width="100%"
                src="https://dkrn4sk0rn31v.cloudfront.net/2020/04/12181348/CORS_principle.png"
                alt="CORS"
            />

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Possíveis erros de CORS
            </h2>

            <p className={`paragraph font-3`}>
                Como a utilização e compartilhamento de recursos de origens diferentes é algo bastante comum na
                internet, nem tudo que o navegador precisa carregar está sujeito ao same-origin policy. Sua página está
                sujeita a algum tipo de problema de CORS em requisições como:
            </p>

            <ul className={"secondLevelList"}>
                <li className={`paragraph font-3`}>
                    XMLHttpRequest ou Fetch API do Javascript;
                </li>
                <li className={`paragraph font-3`}>
                    Web fonts, utilizando a funcionalidade de @font-face do CSS;
                </li>
                <li className={`paragraph font-3`}>
                    WebGL textures;
                </li>
                <li className={`paragraph font-3`}>
                    CSS Shapes
                </li>
                <li className={`paragraph font-3`}>
                    Imagens em canvas desenhados com drawImage()
                </li>
            </ul>

            <p className={`paragraph font-3`}>
                Os casos mais comuns são com as requisições javascript que utilizam XMLHttpRequest ou Fetch APIs. Para
                esses casos vamos entender como o CORS funciona e como podemos solucionar corretamente esse problema.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Ciclo de uma requisição com CORS
            </h2>

            <p className={`paragraph font-3`}>
                Ao enviar uma requisição para uma origem diferente, o navegador utiliza de um header específico enviado
                pelo servidor chamado Access-Control-Allow-Origin. A partir desse e mais alguns headers o navegador
                determina se aquele recurso será carregado ou não.
            </p>

            <p className={`paragraph font-3`}>
                Em alguns tipos de requisições, é necessário enviar uma requisição preliminar chamada de preflighted
                request. O preflighted request utiliza o método OPTIONS do HTTP informando o método e domínio que será
                invocado para assim garantir que a requisição seguinte pode ser realizada.
            </p>

            <p className={`paragraph font-3`}>
                Temos abaixo um diagrama que mostra como funciona uma requisição que precisa enviar uma chamada de
                preflight:
            </p>

            <img
                draggable={false}
                className={`my-24`}
                width="100%"
                src="https://dkrn4sk0rn31v.cloudfront.net/2020/04/12181348/preflight_correct.png"
                alt="CORS"
            />

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Como resolver problemas de CORS
            </h2>

            <p className={`paragraph font-3`}>
                Quando encontramos um erro de CORS, é importante verificar qual requisição esta causando esse problema
                diretamente no console do seu navegador. Geralmente o problema é causado pela ausência de headers no
                lado do servidor.
            </p>

            <p className={`paragraph font-3`}>
                Para corrigir esse problema, garanta que o servidor está enviando os seguintes headers na sua resposta:
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                Access-Control-Allow-Origin: https://perfil.treinaweb.com.br
                <br/>
                Access-Control-Allow-Methods: POST, GET
                <br/>
                Access-Control-Allow-Headers: *
                <br/>
                Access-Control-Max-Age: 86400
            </p>

            <p className={`paragraph font-3`}>
                Nesse exemplo, estamos permitindo que a origem https://perfil.treinaweb.com.br acesse os recursos
                daquele servidor, sendo possível o uso dos métodos HTTP GET e POST, juntamente com qualquer header
                adicional. Para os casos de preflight request, temos também o header Access-Control-Max-Age que funciona
                como um cache, em segundos, para essa request.
            </p>

            <p className={`paragraph font-3`}>
                Tenha uma atenção especial ao header Access-Control-Allow-Origin. Você pode utilizar * como sua origin
                ou até em partes dela (https://*.treinaweb.com.br por exemplo, para incluir todos os subdomínios da
                TreinaWeb), mas tente sempre limitar para origens conhecidas da sua aplicação, evitando assim que
                origens desconhecidas acessem seus servidores.
            </p>

            <p className={`paragraph font-3`}>
                Como enviar esses headers vai variar dependendo da linguagem ou servidor da sua aplicação. Como por
                exemplo, com express você pode definir os headers necessários usando um middleware de CORS:
            </p>

            <img
                draggable={false}
                className={`my-24`}
                width="100%"
                src={cors}
                alt="CORS"
            />

            <p className={`paragraph font-3`}>
                Caso você não tenha acesso ao código da sua aplicação, você pode configurar seu servidor web, como o
                Apache, para retornar esses headers:
            </p>

            <p className={`paragraph font-3 italic codeSnippet`}>
                Header set Access-Control-Allow-Origin "*"
            </p>

            <p className={`paragraph font-3 mb-250`}>
                Em outros casos, pode ser configurar o serviço que você está consumindo, como o S3 da Amazon. Esses
                serviços podem ser configuráveis com regras específicas para atender esses casos, porém isso varia de
                serviço a serviço.
            </p>
        </>
    );
};

export default CORS;
