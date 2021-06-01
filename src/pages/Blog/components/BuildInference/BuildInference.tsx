import React from 'react';

const BuildInference: React.FC = () => {
    return (
        <>
            <p className={`blogIntroduction paragraph font-3`}>
                Talvez você ainda não tenha escutado falar ou não sabe quando utilizar a anotação BuilderInference, eu
                mesmo via bastante nos códigos fontes da Google e sempre ignorava.
            </p>

            <p className={`paragraph font-3`}>
                Hoje irei demonstrar o poder dessa anotação e o porque de ser constante utilizada em muitas bibliotecas.
            </p>

            <p className={`paragraph font-3`}>
                Acredito que você em algum momento já escreveu alguma função genérica e gostaria que o tipo fosse
                automaticamente entendido pela IDE.
            </p>

            <p className={`paragraph font-3`}>
                Olhe bem este exemplo
            </p>

            <img
                draggable={false}
                className={`codeImg my-24`}
                src="https://miro.medium.com/max/700/1*VoItF01RNE799ysN3BMRSw.png"
                alt="Code"
            />

            <p className={`paragraph font-3`}>
                A IDE nos pede para especificar explicitamente o tipo da função listBuilder, ficando então assim:
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*hPySmnGHHT51bJZMVTYjWQ.png"
                alt="Code"
            />

            <p className={`paragraph font-3`}>
                Então não temos problemas, certo ?
            </p>

            <p className={`paragraph font-3`}>
                Eu concordo em certo ponto !
            </p>

            <p className={`paragraph font-3`}>
                Porém, olhe esse outro trecho de código
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*CEHTRATLGxq93Mvt72jP-w.png"
                alt="Code"
            />

            <p className={`paragraph font-3`}>
                Isso acaba implicando na leitura do código, tornando mais confuso, seria muito mais limpo e mais rápido
                no nosso dia a dia se não precisamos de ter que em toda função de builder explicitar o tipo.
            </p>

            <p className={`paragraph font-3`}>
                Vamos reparar alguns exemplos de funções já existentes na biblioteca do Android
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/614/1*taCU7dCaD25yl1QpY51xNQ.png"
                alt="Code"
            />

            <p className={`paragraph font-3`}>
                Essa função tem como padrão de builder, repare como não precisamos escrever o tipo explicitamente,
                ficando mais simples e clara a implementação.
            </p>

            <p className={`paragraph font-3`}>
                Como sabemos, o Kotlin vem sendo constantemente atualizado. Em uma atualização surgiu uma anotação bem
                interessante, essa anotação vem sendo utilizada em várias bibliotecas internas.
            </p>

            <p className={`paragraph font-3`}>
                Vamos então ver o contrato dessa função e ver por que a IDE não reclama.
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*BZ62koIV4Tp6NTa4jMu2Zg.png"
                alt="Code"
            />

            <p className={`paragraph font-3`}>
                Damos aqui maior atenção ao argumento em destaque, repare que esse argumento tem a anotação que
                mencionei no logo no início do artigo.
            </p>

            <p className={`paragraph font-3`}>
                A anotação BuilderInference, nos permite inferir tipos genéricos de uma função a partir das funções da
                interface genérica recebida no lambda.
            </p>

            <p className={`paragraph font-3`}>
                Vamos então modificar nossa função listBuilder para que permita inferir argumentos também.
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/700/1*05LXM-e82QTp0GkvV10l4Q.png"
                alt="Code"
            />

            <p className={`paragraph font-3`}>
                Repare que no contrato o argumento scope recebe uma interface do mesmo tipo da função.
            </p>

            <img
                draggable={false}
                className={`codeImg`}
                src="https://miro.medium.com/max/592/1*vbsFShJ4LOT2rv3d6_a_yQ.png"
                alt="Code"
            />

            <p className={`paragraph font-3`}>
                Ressaltando a importância da interface recebida no lambda, temos que chamar métodos dela para a IDE
                entender o tipo genérico em questão !
            </p>
        </>
    );
};

export default BuildInference;
