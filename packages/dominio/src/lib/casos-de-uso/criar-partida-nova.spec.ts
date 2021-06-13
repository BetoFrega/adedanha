import { CriarPartidaNova } from './criar-partida-nova';
import { RepositórioDePartidasMock } from '../adaptadores/repositorio-de-partidas.mock';
import { GerenciadorDeEventosMock } from '../adaptadores/gerenciador-de-eventos.mock';

describe('Caso: criar partida nova', () => {
  it('deve chamar o repositório', () => {
    const gerenciadorDeEventosMock = new GerenciadorDeEventosMock();
    const repositórioDePartidasMock = new RepositórioDePartidasMock();
    jest.spyOn(repositórioDePartidasMock, 'salvar');
    const criaPartidaNova = new CriarPartidaNova(
      gerenciadorDeEventosMock,
      repositórioDePartidasMock
    );

    const userid = 'userid';
    criaPartidaNova.executar(userid);
    expect(repositórioDePartidasMock.salvar).toHaveBeenCalledWith(
      expect.objectContaining({
        código: expect.stringMatching(/\w{6}/),
      })
    );
  });
});
