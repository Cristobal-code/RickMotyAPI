import { Test, TestingModule } from '@nestjs/testing';
import { PersonajeServiceService } from './personaje.service';

describe('PersonajeServiceService', () => {
  let service: PersonajeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonajeServiceService],
    }).compile();

    service = module.get<PersonajeServiceService>(PersonajeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
