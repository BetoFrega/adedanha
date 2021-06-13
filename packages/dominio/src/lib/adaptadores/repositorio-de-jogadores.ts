import { Jogador } from '../entidades/jogador';

export interface RepositórioDeJogadores {
  salvar(userId: string, jogador: Jogador): Promise<Jogador>;

  recuperar(userid: string): Promise<Jogador>;
}
