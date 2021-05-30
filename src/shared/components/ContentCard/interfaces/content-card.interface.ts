import ContentType from 'shared/type/content-type';

export default interface IContentCard {
    label: string;
    type: ContentType;
    image: string;
    title: string;
    description: string;
    onClick: () => void;
}
