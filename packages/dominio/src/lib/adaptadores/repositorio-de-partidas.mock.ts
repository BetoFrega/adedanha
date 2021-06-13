import { RepositórioDePartidas } from './repositorio-de-partidas';
import { Partida } from '../entidades/partida';

export class RepositórioDePartidasMock implements RepositórioDePartidas {
  private partidas = new Map<string, Partida>();

  async salvar(partidaNova: Partida): Promise<void> {
    await this.partidas.set(partidaNova.código, partidaNova);
  }

  async recuperar(código: string): Promise<Partida> {
    return this.partidas.get(código);
  }
}
