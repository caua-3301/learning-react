import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import Home from '.';

//parametros de como tratar requsições

// Definição dos handlers para as requisições HTTP interceptadas pelo Mock Service Worker (MSW)
const handlers = [
  // Handler para a requisição GET para 'https://jsonplaceholder.typicode.com/todos'
  rest.get('https://jsonplaceholder.typicode.com/todos', async (req, res, ctx) => {
    // Retorna uma resposta para a requisição GET
    return res(
      // Retorna a resposta no formato JSON
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
      ]),
    );
  }),
];

// Exporta os handlers para serem utilizados no arquivo 'server.js' do Mock Service Worker (MSW)

const server = setupServer(...handlers);

//descreve o comportamento de um requisição mockada a partir do tipo de requisição

describe('<Home />', () => {
  //antes de qualquer teste
  beforeAll(() => {
    server.listen();
  });

  //depois de cada teste, o headlers é resetado oara não dar problema
  afterEach(() => {
    server.resetHandlers();
  });

  //fim dos testes
  afterAll(() => {
    server.close();
  });

  it('should render search. post and load more', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText('Não existem posts');
    await waitForElementToBeRemoved(noMorePosts);

    screen.debug();
  });
});
