import { Partida } from '../entidades/partida';

export interface Reposit√≥rioDePartidas {
  salvar(partida: Partida): Promise<void>;

  recuperar(idPartida: string): Promise<Partida>;
}
