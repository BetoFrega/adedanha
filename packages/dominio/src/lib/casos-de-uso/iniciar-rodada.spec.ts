import { RepositórioDeJogadores } from '../adaptadores/repositorio-de-jogadores';
import { RepositórioDePartidas } from '../adaptadores/repositorio-de-partidas';

describe('Caso: iniciar rodada', () => {
  it('deve recusar começar com menos de dois jogadores', () => {});
});

class SolicitarInicioDaRodada {
  constructor(
    private readonly repositórioDeJogadores: RepositórioDeJogadores,
    private readonly repositórioDePartidas: RepositórioDePartidas
  ) {}

  async executar(userId: string) {
    const jogador = await this.repositórioDeJogadores.recuperar(userId);
    if (!jogador.partidaAtual.rodadaAtual) {
      jogador.partidaAtual.novaRodada();
    }
    jogador.partidaAtual.rodadaAtual.adicionarJogador(jogador);

    await this.repositórioDePartidas.salvar(jogador.partidaAtual);
  }
}
