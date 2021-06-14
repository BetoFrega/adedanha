import { Partida } from '../entidades/partida';

export interface RepositórioDePartidas {
  salvar(partida: Partida): Promise<void>;

  recuperar(idPartida: string): Promise<Partida>;
}
