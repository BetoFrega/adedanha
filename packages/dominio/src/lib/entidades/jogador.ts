export class Jogador {
  private valores: { nome: string };

  constructor(param: { nome: string }) {
    this.valores = {
      nome: param.nome,
    };
  }

  static novo(param: { nome: string }) {
    return new Jogador({ nome: param.nome });
  }
}
