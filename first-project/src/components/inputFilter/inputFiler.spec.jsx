import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MyInput } from '.';

describe('<MyInput/>', () => {
  it('should write', () => {
    expect.assertions(3);

    const fn = jest.fn();

    render(<MyInput hadleChange={fn} />);

    const inputText = screen.getByPlaceholderText('Digite aqui');

    const input = 'PesquisaTeste';

    userEvent.type(inputText, input);

    expect(inputText.value).toBe(input);
    expect(fn).toHaveBeenCalledTimes(input.length);
    expect(inputText).toBeInTheDocument();
  });

  it('make the snapshot', () => {
    const fn = jest.fn();

    render(<MyInput hadleChange={fn} />);
    const elementInput = screen.getByPlaceholderText('Digite aqui');

    expect(elementInput).toMatchSnapshot();
  });
});
