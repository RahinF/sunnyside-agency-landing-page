import TopTile from '@components/Tiles/TopTile';
import tiles from '@components/Tiles/data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Top Tiles', () => {
  const tile = tiles.top[0];
  it('renders a heading', () => {
    render(<TopTile {...tile} />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: tile.heading,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders paragraph text', () => {
    render(<TopTile {...tile} />);

    const paragraph = screen.getByText(tile.paragraphText);

    expect(paragraph).toBeInTheDocument();
  });

  it('renders an image', () => {
    render(<TopTile {...tile} />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });

  it('renders a link', () => {
    render(<TopTile {...tile} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });
});
