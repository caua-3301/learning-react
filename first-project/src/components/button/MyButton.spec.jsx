import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MyButton } from '.';

describe('<MyButton />', () => {
  it('should content and click', () => {
    const fn = jest.fn();

    //renderiza um componente no ambiente de testes (simula como a exbição na web)
    render(<MyButton disabled={false} onClick={fn} />);

    //debug();

    const botao = screen.getByRole('button', { name: 'Load more' });

    userEvent.click(botao);

    //expect(fn).toHaveBeenCalledTimes(1);

    expect(botao).toBeInTheDocument();
  });

  it('should make the snapshot', () => {
    const fn = jest.fn();

    //renderiza um componente no ambiente de testes (simula como a exbição na web)
    render(<MyButton text="Load more and more" disabled={true} onClick={fn} />);
    const buttonElement = screen.getByRole('button', { name: 'Load more' });

    expect(buttonElement).toMatchSnapshot();
  });
});
