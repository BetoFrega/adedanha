import { RepositórioDeJogadores } from '../adaptadores/repositorio-de-jogadores';
import {
  Eventos,
  GerenciadorDeEventos,
} from '../adaptadores/gerenciador-de-eventos';
import { Jogador } from '../entidades/jogador';

export class CriarJogadorNovo {
  constructor(
    private readonly repositórioDeJogadores: RepositórioDeJogadores,
    private readonly gerenciadorDeEventos: GerenciadorDeEventos
  ) {}

  async executar(userId: string, opções: { nome: string }) {
    const jogador = Jogador.novo({ nome: opções.nome, userId });
    await this.repositórioDeJogadores.salvar(userId, jogador).then(() => {
      return this.gerenciadorDeEventos.enviar(Eventos.usuárioCriado, {
        userId,
        jogador,
      });
    });
  }
}
