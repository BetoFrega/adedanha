import { Jogador } from '../entidades/jogador';
import { RepositórioDeJogadores } from './repositorio-de-jogadores';

export class RepositórioDeJogadoresMock implements RepositórioDeJogadores {
  private jogadores = new Map<string, Jogador>();

  salvar = async (userId, jogador: Jogador): Promise<void> => {
    await this.jogadores.set(userId, jogador);
  };

  recuperar(userid: string): Promise<Jogador> {
    return Promise.resolve(this.jogadores.get(userid));
  }
}
