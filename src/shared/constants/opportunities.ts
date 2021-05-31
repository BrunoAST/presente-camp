import opportunity1 from 'assets/Content/Opportunities/Vaga1.png';
import opportunity2 from 'assets/Content/Opportunities/Vaga2.png';
import opportunity3 from 'assets/Content/Opportunities/Vaga3.png';
import tw from 'assets/Content/Opportunities/VagaTW.jpeg';
import IContent from '../interfaces/content.interface';

const Opportunities: IContent[] = [
    {
        id: "designer-de-produtos",
        description: 'Apperture Science',
        banner: opportunity1,
        title: 'Designer de produtos',
        type: 'Opportunities',
        interests: 'UI/UX'
    },
    {
        id: "ux-writer-jr",
        description: 'Orwell',
        banner: opportunity2,
        title: 'UX Writer Jr.',
        type: 'Opportunities',
        interests: 'UI/UX'
    },
    {
        id: "designer-de-interfaces-pleno",
        description: 'Abstergo Industries',
        banner: opportunity3,
        title: 'Designer de Interface Pleno',
        type: 'Opportunities',
        interests: 'UI/UX'
    },
    {
        id: "front-end-junior",
        description: 'ThoughtWorks',
        banner: tw,
        title: 'Desenvolvedor Front end Júnior',
        type: 'Opportunities',
        interests: 'Frontend'
    },
    {
        id: "react-pleno",
        description: 'B2W Digital',
        banner: 'data:image/png;base64,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',
        title: 'Desenvolvedor React Pleno',
        type: 'Opportunities',
        interests: 'Frontend'
    },
    {
        id: "angular-pleno",
        description: 'ioasys',
        banner: 'https://ioasys.com.br/static/og-image-7578fe3bd736621f7d9d987908812ee0.jpg',
        title: 'Desenvolvedor Angular Pleno',
        type: 'Opportunities',
        interests: 'Frontend'
    }
];

export default Opportunities;
