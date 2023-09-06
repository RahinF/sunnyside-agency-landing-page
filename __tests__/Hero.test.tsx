import Hero from '@app/components/Hero';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a header image', () => {
    render(<Hero />);

    const headerImage = screen.getByAltText('header background');

    expect(headerImage).toBeInTheDocument();
  });

  it('renders an arrow image', () => {
    render(<Hero />);

    const arrowImage = screen.getByAltText('arrow');

    expect(arrowImage).toBeInTheDocument();
  });

  it('renders heading text', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: /we are creatives/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
