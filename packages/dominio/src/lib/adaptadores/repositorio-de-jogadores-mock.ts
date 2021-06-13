import { Jogador } from '../entidades/jogador';
import { RepositórioDeJogadores } from './repositorio-de-jogadores';

export class RepositórioDeJogadoresMock implements RepositórioDeJogadores {
  private jogadores: Jogador[] = [];
  salvar = (jogador: Jogador): Promise<Jogador> => {
    this.jogadores.push(jogador);
    return Promise.resolve(jogador);
  };
}
