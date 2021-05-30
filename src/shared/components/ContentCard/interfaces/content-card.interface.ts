export default interface IContentCard {
    label: string;
    type: 'Blog' | 'Opportunities';
    image: string;
    title: string;
    description: string;
    onClick: () => void;
}
