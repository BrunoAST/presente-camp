import cep, {CEP} from 'cep-promise';

export default class ViaCepHttp {
    static searchCep(data: string): Promise<CEP> {
        return cep(data);
    }
}
