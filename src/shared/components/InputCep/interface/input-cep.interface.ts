export default interface IInputCep {
    label: string;
    onChange: (cep: string, city: string, state: string) => void;
    onInvalid: () => void;
    isRequired?: boolean;
}
