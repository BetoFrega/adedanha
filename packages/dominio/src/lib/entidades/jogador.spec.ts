import { Jogador } from './jogador';

describe('Jogador', () => {
  it('deve criar um jogador novo', () => {
    const jogador = Jogador.novo({ nome: 'nome do jogador', userId: '12345' });
    expect(jogador).toBeInstanceOf(Jogador);
  });
  it('deve dar erro com nome de menos de 6 caracteres', () => {
    expect(() => Jogador.novo({ nome: '12345', userId: '12345' })).toThrow(
      'Nome deve ter 6 ou mais caracteres.'
    );
  });
});
