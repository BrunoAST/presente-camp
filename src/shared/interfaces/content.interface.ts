export default interface IContent {
    id: string;
    description: string;
    banner: string;
    title: string;
    type: 'Course' | 'Opportunities' | 'Blog';
    by?: string;
    publishDate?: string;
    content?: 'Indication' | 'Design tips' | 'Impediments';
}
