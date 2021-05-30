export default interface IBlog {
    id: string;
    description: string;
    banner: string;
    title: string;
    by: string;
    publishDate: string;
    content: 'Indication' | 'Design tips' | 'Impediments';
}
