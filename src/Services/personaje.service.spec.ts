import { ConfigService } from "@nestjs/config";
import { mock } from "jest-mock-extended";
import { PersonajeService } from "./personaje.service";

import MockAdapter from "axios-mock-adapter";
import { Personaje } from "src/Models/personaje";

describe('PersonajesService', () => {
  let personajesService: PersonajeService;
  let configService = mock<ConfigService>();
  // let mockAdapter =

  beforeEach(() => {
    personajesService = new PersonajeService(configService);
  });
  describe('cuando se llame al metodo get de personajes', () => {
    describe('y la respuesta devuelva 1 personaje ', () => {
      it('debe ser retornado por el metodo get', async () => {
        configService.get.mockReturnValue('FAKE_URL');
        const pj1: Personaje = { nombre: 'Renato', estado: 'Muerto', imagen: 'Renato4k.jpg' };
        const response: Personaje[] = await personajesService.getPersonajes();
      })
    })


  })


})