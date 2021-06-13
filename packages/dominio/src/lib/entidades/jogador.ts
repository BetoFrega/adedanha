export class Jogador {
  private userId: string;
  private valores: { nome: string };

  constructor(param: { nome: string; userId: string }) {
    this.userId = param.userId;
    this.valores = {
      nome: param.nome,
    };
  }

  static novo(param: { nome: string; userId: string }) {
    if (param.nome.length < 6) {
      throw new Error('Nome deve ter 6 ou mais caracteres.');
    }

    return new Jogador({ nome: param.nome, userId: param.userId });
  }
}
