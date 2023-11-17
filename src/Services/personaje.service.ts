import { Injectable } from '@nestjs/common';
import { Personaje } from 'src/Models/personaje';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { RespondeRickMorty } from 'src/interfaces/ResponseRickMorty';
@Injectable()
export class PersonajeServiceService {
    constructor(private readonly configService: ConfigService) { }

    async getPersonajes(): Promise<Personaje[]> {
        const url: string = this.configService.get<string>('ENDPOINT_PERSONAJES');
        console.log(url)
        const data = (await axios.get(url)).data as RespondeRickMorty;
        const personajes = data.results;
        return personajes.map(p => {
            return { nombre: p.name, imagen: p.image, estado: p.status }
        })
    }
}
