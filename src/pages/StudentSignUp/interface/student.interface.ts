export default interface IStudent {
    name: string;
    birthday: Date;
    race: string;
    sexualOrientation: string;
    graduation: string; // Criar ENUM
    about: string; // Não é obrigatório
    interests: string[]; // Criar ENUM
    gender: string; // Criar ENUM
    password: string;
    locationState: string;
    locationCity: string;
    email: string;
    id: string;
}
