import {
  Eventos,
  GerenciadorDeEventos,
} from '../adaptadores/gerenciador-de-eventos';
import { RepositórioDePartidas } from '../adaptadores/repositorio-de-partidas';
import { Partida } from '../entidades/partida';

export class CriarPartidaNova {
  constructor(
    private readonly gerenciadorDeEventos: GerenciadorDeEventos,
    private readonly repositórioDePartidas: RepositórioDePartidas
  ) {}

  executar(userid: string) {
    const partidaNova = Partida.nova({ idDoCriador: userid });
    return this.repositórioDePartidas
      .salvar(partidaNova)
      .then((partidaNova) => {
        return this.gerenciadorDeEventos.enviar(Eventos.partidaCriada, {
          partida: partidaNova,
        });
      });
  }
}
