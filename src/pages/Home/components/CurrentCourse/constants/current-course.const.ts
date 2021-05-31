import ux from 'assets/Content/Courses/Course1.png';

interface Course {
    banner: string;
    title: string;
    subtitle: string;
    interest: string;
    progress: number;
}

const CurrentCourseConst: Course[] = [
    {
        banner: ux,
        title: 'Como montar um briefing de UX Writing',
        subtitle: 'UX Writing',
        interest: 'UI/UX',
        progress: 10
    },
    {
        banner: 'https://blog.trello.com/hs-fs/Imported_Blog_Media/scrum_agile_feature-1024x512-2.jpg',
        title: 'Agilidade em seu projeto',
        subtitle: 'Curso scrum',
        interest: 'Gestão de projetos',
        progress: 5
    },
    {
        banner: 'https://avantemidia.com.br/wp-content/uploads/2020/03/UI-Design.png',
        title: 'Listeners, menu e UI',
        subtitle: 'Indrodução Android',
        interest: 'Android',
        progress: 12
    },
    {
        banner: 'https://fernandofranzini.files.wordpress.com/2017/07/nodejs-2-562x3092x-op.png',
        title: 'NodeJs: Armazenando dados temporários com o Redis',
        subtitle: 'Armazenamento em memória',
        interest: 'Backend',
        progress: 76
    },
    {
        banner: 'https://www.chiefofdesign.com.br/wp-content/uploads/2017/11/flexbox-css.png',
        title: 'Centralizando elementos com Flexbox',
        subtitle: 'Flexbox',
        interest: 'Frontend',
        progress: 58
    },
];

export default CurrentCourseConst;
