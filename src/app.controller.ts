import { Controller, Get } from '@nestjs/common';
import { PersonajeService } from './Services/personaje.service';
import { Personaje } from './Models/personaje';

@Controller()
export class AppController {
  constructor(private readonly personajesService: PersonajeService) { }

  @Get('/personajes')
  getPersonajes(): Promise<Personaje[]> {
    return this.personajesService.getPersonajes();
  }
}
