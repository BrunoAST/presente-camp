export default interface ISelect {
    label: string;
    value: any;
    isRequired: boolean;
    items: any[];
    name: string;
    handleChange: any;
    error: any;
    valueBind?: any;
}
