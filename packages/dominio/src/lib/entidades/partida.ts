import { Jogador } from './jogador';

export class Partida {
  readonly código: string;
  private valores: {
    jogadores: Set<Jogador>;
    criador: Jogador;
  };

  constructor(param: { criador: Jogador }) {
    this.código = this.makeid(6);
    this.valores = {
      jogadores: new Set<Jogador>(),
      criador: param.criador,
    };
  }

  static nova(param: { criador: Jogador }): Partida {
    return new Partida({ criador: param.criador });
  }

  makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  incluirJogador(jogador: Jogador) {
    this.valores.jogadores.add(jogador);
  }
}
