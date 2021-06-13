export enum Eventos {
  usuárioCriado,
  partidaCriada,
}

export interface GerenciadorDeEventos {
  enviar(evento: Eventos, data: unknown): void;
  escutar(evento: Eventos, callback: (data: unknown) => void): void;
}
