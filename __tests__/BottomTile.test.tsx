import BottomTile from '@components/Tiles/BottomTile';
import tiles from '@components/Tiles/data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Tiles', () => {
  const tile = tiles.bottom[0];
  
  it('renders a heading', () => {
    render(<BottomTile {...tile} />);

    const heading = screen.getByRole('heading', {
      level: 1,
      name: tile.heading,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders paragraph text', () => {
    render(<BottomTile {...tile} />);

    const paragraph = screen.getByText(tile.paragraphText);

    expect(paragraph).toBeInTheDocument();
  });

  it('renders an image', () => {
    render(<BottomTile {...tile} />);

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
