import { RepositórioDeJogadores } from '../adaptadores/repositorio-de-jogadores';
import { RepositórioDePartidas } from '../adaptadores/repositorio-de-partidas';

export class EntrarNaPartida {
  constructor(
    private readonly repositórioDeJogadores: RepositórioDeJogadores,
    private readonly repositórioDePartidas: RepositórioDePartidas
  ) {}

  async executar(userid: string, payload: { códigoDaPartida: string }) {
    const jogador = await this.repositórioDeJogadores.recuperar(userid);
    const partida = await this.repositórioDePartidas.recuperar(
      payload.códigoDaPartida
    );
    jogador.entrarNaPartida(partida);
  }
}
