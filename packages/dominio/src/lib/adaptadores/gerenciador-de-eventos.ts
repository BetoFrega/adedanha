export enum Eventos {
  usuárioCriado,
}

export interface GerenciadorDeEventos {
  enviar(evento: Eventos, data: unknown): void;
}
