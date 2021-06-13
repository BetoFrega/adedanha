import { CriarJogadorNovo } from './criar-jogador-novo';
import { RepositórioDeJogadores } from '../adaptadores/repositorio-de-jogadores';
import { Jogador } from '../entidades/jogador';
import {
  Eventos,
  GerenciadorDeEventos,
} from '../adaptadores/gerenciador-de-eventos';

import { RepositórioDeJogadoresMock } from '../adaptadores/repositorio-de-jogadores-mock';

describe('Caso: cria jogador novo', () => {
  it('deve chamar o repositório', () => {
    const repositórioDeJogadoresMock: Partial<RepositórioDeJogadores> = new RepositórioDeJogadoresMock();
    jest.spyOn(repositórioDeJogadoresMock, 'salvar');
    const gerenciadorDeEventosMock: Partial<GerenciadorDeEventos> = {
      enviar: jest.fn(),
    };
    const criaJogadorNovo = new CriarJogadorNovo(
      repositórioDeJogadoresMock as RepositórioDeJogadores,
      gerenciadorDeEventosMock as GerenciadorDeEventos
    );
    const USER_ID = '1';
    criaJogadorNovo.executar(USER_ID, { nome: 'Jogador da Silva' });
    expect(repositórioDeJogadoresMock.salvar).toHaveBeenCalledWith(
      USER_ID,
      expect.any(Jogador)
    );
  });
  it('deve chamar o gerenciador de eventos', async () => {
    const repositórioDeJogadoresMock = new RepositórioDeJogadoresMock();
    const gerenciadorDeEventosMock: Partial<GerenciadorDeEventos> = {
      enviar: jest.fn(),
    };
    const criaJogadorNovo = new CriarJogadorNovo(
      repositórioDeJogadoresMock as RepositórioDeJogadores,
      gerenciadorDeEventosMock as GerenciadorDeEventos
    );
    const USER_ID = '1';
    await criaJogadorNovo.executar(USER_ID, { nome: 'Jogador da Silva' });
    expect(gerenciadorDeEventosMock.enviar).toHaveBeenCalledWith(
      Eventos.usuárioCriado,
      {
        userId: USER_ID,
        jogador: expect.any(Jogador),
      }
    );
  });
});
