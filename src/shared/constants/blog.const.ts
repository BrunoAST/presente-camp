import monthIndication from 'assets/Banner/Indicação do mês.svg';
import IBlog from '../interfaces/blog.interface';

const Blogs: IBlog[] = [
    {
        id: "indicacoes-do-mes",
        description: 'Recomendações',
        banner: monthIndication,
        title: 'Indicações do mês',
        by: 'Equipe Presente',
        publishDate: '27 de Maio de 2021',
        content: 'Indication'
    },
    {
        id: "impedimentos-o-que-e-como-agir",
        description: 'Como agir nessas situações',
        banner: 'https://i0.wp.com/blog.iteris.com.br/wp-content/uploads/2020/07/07-07Capa-Blog-1200x675px.png?fit=1200%2C675&ssl=1',
        title: 'Impedimento: o que é e como agir',
        by: 'Equipe Presente',
        publishDate: '24 de Maio de 2021',
        content: 'Impediments'
    }
];

export default Blogs;
