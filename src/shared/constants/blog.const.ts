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
    }
];

export default Blogs;
