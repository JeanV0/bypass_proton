import FormData from "form-data";
import { PersonResponse } from "./response/person_json";
import axios from "axios";

const URI = 'https://www.4devs.com.br/ferramentas_online.php';

export async function getInfoPerson(): Promise<PersonResponse[]> {
    const formData = new FormData()
    formData.append('acao','gerar_pessoa');
    formData.append('sexo', 'I');
    formData.append('pontuacao','N');
    formData.append('idade','0');
    formData.append('cep_estado','');
    formData.append('txt_qtde','1');
    formData.append('cep_cidade','');
    const data = (await axios.post<PersonResponse[]>('https://www.4devs.com.br/ferramentas_online.php', formData, {
        headers: formData.getHeaders()
    })).data;

    return data;
}