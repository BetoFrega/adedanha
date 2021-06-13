import { RepositórioDePartidas } from './repositorio-de-partidas';
import { Partida } from '../entidades/partida';

export class RepositórioDePartidasMock implements RepositórioDePartidas {
  private partidas = new Map<string, Partida>();

  async salvar(partidaNova: Partida): Promise<Partida> {
    this.partidas.set(partidaNova.código, partidaNova);
    return partidaNova;
  }
}
