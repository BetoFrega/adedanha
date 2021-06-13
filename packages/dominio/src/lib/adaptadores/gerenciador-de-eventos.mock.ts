import { Eventos, GerenciadorDeEventos } from './gerenciador-de-eventos';

export class GerenciadorDeEventosMock implements GerenciadorDeEventos {
  private assinaturas: {
    evento: Eventos;
    callback: (data: unknown) => void;
  }[] = [];

  enviar(evento: Eventos, data: unknown): void {
    this.assinaturas
      .filter((a) => a.evento === evento)
      .forEach((assinatura) => {
        assinatura.callback(data);
      });
  }

  escutar(evento: Eventos, callback: (data: unknown) => void): void {
    this.assinaturas.push({ evento, callback });
  }
}
