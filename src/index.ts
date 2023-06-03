import { getInfoPerson } from "./4devs/generate_person";

async function teste() {
    console.log('Buscando informações');
    console.log(await getInfoPerson());
    console.log('Terminou buscar informações');
};

teste();
