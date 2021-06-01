import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import IContentFilter from '../interfaces/content-filter.interface';
import Blogs from '../constants/blog.const';
import Courses from '../constants/courses.const';
import Opportunities from '../constants/opportunities';
import IContent from '../interfaces/content.interface';
import {getItem} from '../local-storage/user-local-storage';

const useFilterContent = () => {
    const [filteredContent, setFilteredContent] = useState<IContent[]>([]);
    const [allContent] = useState([...Blogs, ...Courses, ...Opportunities]);
    const [content, setContent] = useState<IContentFilter>({} as IContentFilter);
    const {filter} = useParams();

    useEffect(() => {
        function filterContent(): void {
            if (!filter) {
                setContent({
                    ...content,
                    title: 'Conteúdo',
                    description: `Todo nosso conteúdo`,
                    titleColor: 'orange-fg'
                });
                setFilteredContent(allContent);
                return;
            }

            if (!getItem().interests && getItem().interests?.length <= 0) {
                setFilteredContent([])
                return;
            }

            if (filter.trim().includes('blog')) {
                setContent({...content, title: 'Blog', description: 'Leituras complementares', titleColor: 'pink-fg'});
                const blogs = allContent.filter(data => data.type === 'Blog' && getItem().interests.includes(data.interests));
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
                const opportunities = allContent.filter(data => data.type === 'Opportunities' && getItem().interests.includes(data.interests));
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

                const courses = allContent.filter(data => data.type === 'Course' && getItem().interests.includes(data.interests));
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
                (data.title.toLocaleLowerCase().includes(filter.trim().toLocaleLowerCase()) ||
                data.description.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) &&
                getItem().interests.includes(data.interests)
            );
            setFilteredContent(filteredData);
        }

        filterContent();
    }, [filter, allContent]);

    return {content, filteredContent};
};

export default useFilterContent;
