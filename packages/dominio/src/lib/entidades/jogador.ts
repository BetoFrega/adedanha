export class Jogador {
  private valores: { nome: string };

  constructor(param: { nome: string }) {
    this.valores = {
      nome: param.nome,
    };
  }

  static novo(param: { nome: string }) {
    if (param.nome.length < 6) {
      throw new Error('Nome deve ter 6 ou mais caracteres.');
    }
    return new Jogador({ nome: param.nome });
  }
}
