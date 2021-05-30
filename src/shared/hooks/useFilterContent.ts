import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import IContentFilter from '../interfaces/content-filter.interface';

const useFilterContent = () => {
    const [content, setContent] = useState<IContentFilter>({} as IContentFilter);
    const {filter} = useParams();

    useEffect(() => {
        function filterContent(): void {
            if (filter.trim().includes('blog')) {
                setContent({...content, title: 'Blog', description: 'Leituras complementares', titleColor: 'pink-fg'});
                return;
            }

            if (filter.trim().includes('vaga')) {
                setContent({
                    ...content,
                    title: 'Vaga',
                    description: 'Oportunidades para você',
                    titleColor: 'purple-fg'
                });
                return;
            }

            if (filter.trim().includes('curso')) {
                setContent({
                    ...content,
                    title: 'Curso',
                    description: 'Confira cursos livres e temporários',
                    titleColor: 'green-accent-fg'
                });
                return;
            }

            setContent({
                ...content,
                title: 'Conteúdo',
                description: `Resultados para a pequisa: ${filter}`,
                titleColor: 'orange-fg'
            });
        }

        filterContent();
    }, [filter]);

    return {content};
};

export default useFilterContent;
