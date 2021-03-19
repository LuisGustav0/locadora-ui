import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MemoryDbService implements InMemoryDbService {

  createDb () {
    const filmes = [
      {
        id: 1,
        nome: 'Tom & Jerry',
        ano: '2021',
        diretor: 'Tim Story',
        genero: 'Animação, Comédia, Aventura',
        descricao: 'Adaptação dos desenhos, Tom & Jerry: O Filme mostra uma das rivalidades mais amadas da história que é reacendida quando Jerry se muda para o melhor hotel de Nova York na véspera do "casamento do século", forçando a desesperada organizadora do evento (Chloe Moretz) a contratar Tom para se livrar do rato. Mas logo surge um problema ainda maior: um funcionário diabolicamente ambicioso conspira contra os três. Uma combinação de animação clássica e live-action.',
        posterUrl: 'http://www.adorocinema.com/filmes/filme-268680/'
      }
    ];

    return {filmes};
  }
}
