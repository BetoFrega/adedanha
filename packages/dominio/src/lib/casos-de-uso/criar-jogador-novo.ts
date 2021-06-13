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

  async executar(opções: { nome: string }) {
    const jogador = Jogador.novo({ nome: opções.nome });
    this.repositórioDeJogadores.salvar(jogador).then((jogador: Jogador) => {
      this.gerenciadorDeEventos.enviar(Eventos.usuárioCriado, { jogador });
    });
  }
}
