import { Jogador } from '../entidades/jogador';
import { RepositórioDeJogadores } from './repositorio-de-jogadores';

export class RepositórioDeJogadoresMock implements RepositórioDeJogadores {
  private jogadores = new Map<string, Jogador>();
  salvar = (userId, jogador: Jogador): Promise<Jogador> => {
    this.jogadores.set(userId, jogador);
    return Promise.resolve(jogador);
  };

  recuperar(userid: string): Promise<Jogador> {
    return Promise.resolve(this.jogadores.get(userid));
  }
}
