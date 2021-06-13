import { Jogador } from '../entidades/jogador';

export interface RepositórioDeJogadores {
  salvar(jogador: Jogador): Promise<Jogador>;
}
