import Logo from '@app/components/Logo';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Logo', () => {
  it('renders a svg logo', () => {
    render(<Logo />);

    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });
});
