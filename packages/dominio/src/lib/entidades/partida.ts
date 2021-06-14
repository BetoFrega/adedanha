import { Jogador } from './jogador';
export class Rodada {
  ativa: boolean;
  jogadores: Set<Jogador>;
  adicionarJogador(jogador: Jogador) {
    this.jogadores.add(jogador);
  }
}
export class Partida {
  readonly código: string;
  private valores: {
    jogadores: Set<Jogador>;
    rodadas: Array<Rodada>;
    criador: Jogador;
  };

  constructor(param: { criador: Jogador }) {
    this.código = this.makeid(6);
    this.valores = {
      jogadores: new Set<Jogador>(),
      criador: param.criador,
      rodadas: new Array<Rodada>(),
    };
  }
  get rodadaAtual(): Rodada | null {
    return this.valores.rodadas.find((rodada) => rodada.ativa);
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

  novaRodada() {
    if (this.rodadaAtual) throw new Error('Já existe uma rodada ativa.');
    this.valores.rodadas.push(new Rodada());
  }
}
