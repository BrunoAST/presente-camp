import BlogContent from 'shared/type/blog-content';
import ContentType from 'shared/type/content-type';

export default interface IContent {
    id: string;
    description: string;
    banner: string;
    title: string;
    interests: string;
    type: ContentType;
    by?: string;
    publishDate?: string;
    content?: BlogContent;
}
