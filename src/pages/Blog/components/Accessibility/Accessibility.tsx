import React from 'react';

const Accessibility: React.FC = () => {
    return (
        <>
            <p className={`blogIntroduction paragraph font-3`}>
                Quando comecei nesse mundo do desenvolvimento de interfaces eu não tinha muita ideia do que era
                acessibilidade. Era um assunto que me parecia muito além do meu conhecimento e da minha atuação, porém
                de uma vez ou outra me deparava com algo sobre (Linkedin, Medium e trabalho).
            </p>

            <p className={`paragraph font-3`}>
                De todas as vezes que eu ouvi, vi ou li sobre acessibilidade, o discurso sempre foi o mesmo. A
                justificativa era que devemos trabalhar a acessibilidade pois tantos por centos da população tem algum
                tipo de deficiência ou de que este mesmo número cresce tanto a cada ano.
            </p>

            <p className={`paragraph font-3`}>
                Essa não é a abordagem quantitativa que gostaria de trazer. Acessibilidade, pra mim, significa que uma
                aplicação deve ser ✨acessível✨ e pronto. Para o deficiente visual, para a vovó mais de idade, para o
                autista, para a daltônica, para o estudante, o empregado e o desempregado. Enfim, a todos.
                Acessibilidade é democratizar a informação.
            </p>

            <p className={`paragraph font-3`}>
                Digo isso porque acessibilidade está 100% relacionada a experiência de usuário, o tal UX que tantos
                falam. Uma aplicação acessível significa que ela é fácil de ser usada, objetiva nas suas intenções,
                clara nas ideias e elegante na implementação.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                “Mas parceiro, como faço para minha entrega ser acessível?“
            </h2>

            <p className={`paragraph font-3`}>
                Deixar uma tela acessível não é um bicho de 7 cabeças como pode parecer a priori. Vamos elencar os
                pontos e falar um pouquinho sobre cada:
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                HTML
            </h2>

            <p className={`paragraph font-3`}>
                Trate de utilizar o mais corretamente possível a semântica dos elementos HTML e suas propriedades.
            </p>

            <p className={`paragraph font-3`}>
                Respeite os conceitos, os atributos e as propriedades das tags. Leitores de tela, ampliadores de tela e
                outras ferramentas de auxílio utilizam muito do HTML para se guiar.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Cores e contrastes
            </h2>

            <p className={`paragraph font-3`}>
                Tome cuidado com as cores e seus contrates. Busque deixar bem definido o início e o fim das cores,
                contraste para ficarem bem definidas. Isso garante que pessoas com baixa visão ou daltonismo consigam
                ver adequadamente, e, em linhas gerais facilita, para todos.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Imagens
            </h2>

            <p className={`paragraph font-3`}>
                Como leitores de tela não leem imagens, descreva a imagem usando o atributo alt da tag img.
            </p>

            <p className={`paragraph font-3`}>
                Caso a imagem não tenha importância e seja totalmente ilustrativa, deixe o alt em branco, dessa forma, o
                leitor de tela saberá que ele deve pular a imagem.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Vídeos
            </h2>

            <p className={`paragraph font-3`}>
                Sabe aquele videozinho institucional muito legal que você colocou? Não esqueça de permitir que seja
                possível assisti-lo de forma legendada também.
            </p>

            <p className={`paragraph font-3`}>
                Legendas são super importantes.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Hierarquia de textos
            </h2>

            <p className={`paragraph font-3`}>
                O HTML possuí uma hierarquia para textos a ser seguida. Respeitando a hierarquia você deixará bem claro
                que sua interface tem um fluxo de leitura a ser seguido.
            </p>

            <p className={`paragraph font-3`}>
                Utilize de forma adequada as tags de título, sub-título, parágrafo etc.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Navegação pelo teclado
            </h2>

            <p className={`paragraph font-3`}>
                É extremamente importante que sua aplicação possa ser utilizada também por aqueles que possuem alguma
                dificuldade motora e portanto usam o teclado para navegar.
            </p>

            <p className={`paragraph font-3`}>
                Mantenha uma estrutura hierárquica do HTML. Respeite as tags HTML, para que seja possível usufruir da
                aplicação utilizando a tecla tab.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Links
            </h2>

            <p className={`paragraph font-3`}>
                Fazendo alusão ao item “Navegação pelo teclado”, os links devem ser navegáveis para que seja fácil
                percorrê-los utilizando a tecla tab.
            </p>

            <p className={`paragraph font-3`}>
                Além disso, note se seu link é facilmente perceptível de que é um link (indicação visual).
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Formulários
            </h2>

            <p className={`paragraph font-3`}>
                Formulários tem evoluído para uma pegada minimalista, isso é bom… mas também é ruim. Não desfaça dos
                rótulos e fronteiras bem definidas.
            </p>

            <p className={`paragraph font-3`}>
                Coloque labels nos campos para identifica-los, e utilize de indicações visuais (cores, mensagens, ícones
                etc.). para demonstrar o estado do formulário e notificar o usuário do das obrigatoriedades, erros e
                sucessos.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Fontes
            </h2>

            <p className={`paragraph font-3`}>
                Fontes é um assunto complicado. Por favor, tenha bom senso na fonte que vai utilizar. Uma fonte robusta
                e complexa só vai dificultar a leitura.
            </p>

            <p className={`paragraph font-3`}>
                Além disso, fique atento aos tamanhos das fontes e espaçamento entre linhas, não precisa deixar tudo
                pequeninho.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Linguagem
            </h2>

            <p className={`paragraph font-3`}>
                Uma linguagem compreendida por todos é o ideal. Evite mensagens difíceis e palavras complicadas. Escreva
                simples! Seja claro!
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Foco
            </h2>

            <p className={`paragraph font-3`}>
                Indique o elemento que está com foco, deixe essa informação bem visível utilizando de indicadores
                visuais.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                ARIA
            </h2>

            <p className={`paragraph font-3`}>
                ARIA é uma especificação controlada pela W3C. ARIA é uma extensão do HTML que define atributos,
                propriedades e estados para auxiliar, melhorar e incrementar a experiência com tecnologias assistivas.
            </p>

            <p className={`paragraph font-3`}>
                ARIA é uma especificação controlada pela W3C. ARIA é uma extensão do HTML que define atributos,
                propriedades e estados para auxiliar, melhorar e incrementar a experiência com tecnologias assistivas.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Landmarks
            </h2>

            <p className={`paragraph font-3`}>
                Landmarks funcionam como pontos de referência. Sua utilização é para identificar pontos importantes da
                aplicação para permitir que o usuário os alcance com mais facilidade.
            </p>

            <h2 className={`blogSubTitle font-3 emphasis`}>
                Landmarks
            </h2>

            <p className={`paragraph font-3`}>
                Quando viável, utilize de manipuladores de evento Javascript que independem do dispositivo utilizado.
            </p>
        </>
    );
};

export default Accessibility;
