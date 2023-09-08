import links from '@app/components/Navigation/data';
import DesktopNavigation from '@components/Navigation/Desktop';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Desktop Navigation', () => {
  it('renders 4 links', () => {
    render(<DesktopNavigation />);

    const navLinks = screen.getAllByRole('link');

    expect(navLinks).toHaveLength(links.length);
  });
});
