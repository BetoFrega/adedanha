import { Partida } from '../entidades/partida';

export interface RepositórioDePartidas {
  salvar(partidaNova: Partida): Promise<void>;

  recuperar(idPartida: string): Promise<Partida>;
}
