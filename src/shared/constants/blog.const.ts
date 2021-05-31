import monthIndication from 'assets/Banner/Indicação do mês.svg';
import impediment from 'assets/Content/Blog/Impediment/Impedimento.png';
import IContent from '../interfaces/content.interface';

const Blogs: IContent[] = [
    {
        id: "indicacoes-do-mes",
        description: 'Recomendações',
        banner: monthIndication,
        title: 'Indicações do mês',
        by: 'Equipe Presente',
        publishDate: '27 de Maio de 2021',
        content: 'Indication',
        type: 'Blog',
        interests: 'UI/UX'
    },
    {
        id: "impedimentos-o-que-e-como-agir",
        description: 'Como agir nessas situações',
        banner: impediment,
        title: 'Impedimento: o que é e como agir',
        by: 'Equipe Presente',
        publishDate: '24 de Maio de 2021',
        content: 'Impediments',
        type: 'Blog',
        interests: 'Gestão de projetos'
    },
    {
        id: "criando-primeira-api-rest-com-node-js",
        description: 'Primeiros passos',
        banner: 'https://res.cloudinary.com/practicaldev/image/fetch/s--_QMQU86---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/6dnng3pre04xxdebia1g.png',
        title: 'Criando minha primeira API REST com Node.js',
        by: 'Equipe Presente',
        publishDate: '31 de Maio de 2021',
        content: 'First API',
        type: 'Blog',
        interests: 'Backend'
    }
];

export default Blogs;
