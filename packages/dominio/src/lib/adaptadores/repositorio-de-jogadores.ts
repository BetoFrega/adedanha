import { Jogador } from '../entidades/jogador';

export interface RepositórioDeJogadores {
  salvar(userId: string, jogador: Jogador): Promise<void>;

  recuperar(userid: string): Promise<Jogador>;
}
