export default interface ISelectionChips {
    items: string[];
    selected: (items: string[]) => void;
}
