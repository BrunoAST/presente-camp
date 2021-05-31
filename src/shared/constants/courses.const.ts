import course1 from 'assets/Content/Courses/Course1.png';
import course2 from 'assets/Content/Courses/Course2.png';
import IContent from '../interfaces/content.interface';

const Courses: IContent[] = [
    {
        id: "teoria-das-cores",
        description: 'Teoria do Design',
        banner: course1,
        title: 'Teoria das cores',
        type: 'Course',
        interests: 'UI/UX'
    },
    {
        id: "teoria-das-cores",
        description: 'UX Writing',
        banner: course2,
        title: 'Como montar um briefing de UX Writing',
        type: 'Course',
        interests: 'UI/UX',
    },
];

export default Courses;
