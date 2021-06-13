export class Partida {
  readonly código: string;
  private valores: {};

  constructor(param: { idDoCriador: string }) {
    this.código = this.makeid(6);
  }

  static nova(param: { idDoCriador: string }): Partida {
    return new Partida({ idDoCriador: param.idDoCriador });
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
}
