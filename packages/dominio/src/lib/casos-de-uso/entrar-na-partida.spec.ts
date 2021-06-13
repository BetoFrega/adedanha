import { RepositórioDeJogadoresMock } from '../adaptadores/repositorio-de-jogadores.mock';
import { RepositórioDePartidasMock } from '../adaptadores/repositorio-de-partidas.mock';
import { Jogador } from '../entidades/jogador';
import { Partida } from '../entidades/partida';
import { EntrarNaPartida } from './entrar-na.partida';

describe('Caso: entrar na partida', () => {
  let repositórioDePartidasMock: RepositórioDePartidasMock;
  let repositórioDeJogadoresMock: RepositórioDeJogadoresMock;
  let entrarNaPartida: EntrarNaPartida;

  beforeEach(() => {
    repositórioDePartidasMock = new RepositórioDePartidasMock();
    repositórioDeJogadoresMock = new RepositórioDeJogadoresMock();
    entrarNaPartida = new EntrarNaPartida(
      repositórioDeJogadoresMock,
      repositórioDePartidasMock
    );
  });

  it('deve incluir o usuário na partida', () => {
    const jogador = Jogador.novo({ nome: 'jogador', userId: '1' });
    const partida = Partida.nova({ criador: jogador });
    jest
      .spyOn(repositórioDeJogadoresMock, 'recuperar')
      .mockImplementation(async () => jogador);
    jest
      .spyOn(repositórioDePartidasMock, 'recuperar')
      .mockImplementation(async () => partida);
    entrarNaPartida.executar('userid', { códigoDaPartida: partida.código });
  });
});
