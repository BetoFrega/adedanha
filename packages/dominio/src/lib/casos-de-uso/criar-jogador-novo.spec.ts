import { CriarJogadorNovo } from './criar-jogador-novo';
import { RepositórioDeJogadores } from '../adaptadores/repositorio-de-jogadores';
import { Jogador } from '../entidades/jogador';
import { GerenciadorDeEventos } from '../adaptadores/gerenciador-de-eventos';

describe('Caso: cria jogador novo', () => {
  it('deve chamar o repositório', () => {
    const repositórioDeJogadoresMock: Partial<RepositórioDeJogadores> = {
      salvar: jest.fn().mockImplementation(async (jogador: Jogador) => {
        return jogador;
      }),
    };
    const gerenciadorDeEventosMock: Partial<GerenciadorDeEventos> = {
      enviar: jest.fn(),
    };
    const criaJogadorNovo = new CriarJogadorNovo(
      repositórioDeJogadoresMock as RepositórioDeJogadores,
      gerenciadorDeEventosMock as GerenciadorDeEventos
    );
    criaJogadorNovo.executar({ nome: 'Jogador da Silva' });
    expect(repositórioDeJogadoresMock.salvar).toHaveBeenCalledWith(
      expect.any(Jogador)
    );
  });
});
