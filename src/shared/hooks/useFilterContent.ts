import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import IContentFilter from '../interfaces/content-filter.interface';
import Blogs from '../constants/blog.const';
import Courses from '../constants/courses.const';
import Opportunities from '../constants/opportunities';
import IContent from '../interfaces/content.interface';

const useFilterContent = () => {
    const [filteredContent, setFilteredContent] = useState<IContent[]>([]);
    const [allContent] = useState([...Blogs, ...Courses, ...Opportunities]);
    const [content, setContent] = useState<IContentFilter>({} as IContentFilter);
    const {filter} = useParams();

    useEffect(() => {
        function filterContent(): void {
            if (filter.trim().includes('blog')) {
                setContent({...content, title: 'Blog', description: 'Leituras complementares', titleColor: 'pink-fg'});
                const blogs = allContent.filter(data => data.type === 'Blog');
                setFilteredContent(blogs);
                return;
            }

            if (filter.trim().includes('vaga')) {
                setContent({
                    ...content,
                    title: 'Vaga',
                    description: 'Oportunidades para você',
                    titleColor: 'purple-fg'
                });
                const opportunities = allContent.filter(data => data.type === 'Opportunities');
                setFilteredContent(opportunities);

                return;
            }

            if (filter.trim().includes('curso')) {
                setContent({
                    ...content,
                    title: 'Curso',
                    description: 'Confira cursos livres e temporários',
                    titleColor: 'green-accent-fg'
                });
                const courses = allContent.filter(data => data.type === 'Course');
                setFilteredContent(courses);

                return;
            }

            setContent({
                ...content,
                title: 'Conteúdo',
                description: `Resultados para a pequisa: ${filter}`,
                titleColor: 'orange-fg'
            });
            const filteredData = allContent.filter(data =>
                data.title.toLocaleLowerCase().includes(filter.trim().toLocaleLowerCase()) ||
                data.description.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
            );
            setFilteredContent(filteredData);
        }

        filterContent();
    }, [filter]);

    return {content, filteredContent};
};

export default useFilterContent;
