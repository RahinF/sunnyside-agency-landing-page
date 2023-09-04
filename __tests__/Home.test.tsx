import Home from '@app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const text = screen.getByRole('heading', {
      level: 1,
      name: /home/i,
    });

    expect(text).toBeInTheDocument();
  });
});
