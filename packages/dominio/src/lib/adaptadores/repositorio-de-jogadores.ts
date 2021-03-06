import { Jogador } from '../entidades/jogador';

export interface Reposit√≥rioDeJogadores {
  salvar(userId: string, jogador: Jogador): Promise<void>;

  recuperar(userid: string): Promise<Jogador>;
}
