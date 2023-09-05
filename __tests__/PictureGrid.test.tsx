import PictureGrid from '@components/PictureGrid';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('PictureGrid', () => {
  it('renders 4 images', () => {
    render(<PictureGrid />);

    const pictures = screen.getAllByTestId('picture');

    expect(pictures).toHaveLength(4);
  });
});
