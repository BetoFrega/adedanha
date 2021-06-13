import { Partida } from '../entidades/partida';

export interface RepositórioDePartidas {
  salvar(partidaNova: Partida): Promise<Partida>;
}
