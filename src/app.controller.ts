import { Controller, Get } from '@nestjs/common';
import { PersonajeServiceService } from './Services/personaje.service';
import { Personaje } from './Models/personaje';

@Controller()
export class AppController {
  constructor(private readonly personajesService: PersonajeServiceService) { }

  @Get('/personajes')
  getPersonajes(): Promise<Personaje[]> {
    return this.personajesService.getPersonajes();
  }
}
