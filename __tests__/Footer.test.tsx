import Footer from '@components/Footer';
import icons from '@components/Footer/data/icons';
import links from '@components/Footer/data/links';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('renders 3 links', () => {
    render(<Footer />);

    const footerLinks = screen.getAllByRole('link');

    expect(footerLinks).toHaveLength(links.length);
  });

  it('renders facebook icon', () => {
    render(<Footer />);

    const facebookIcon = screen.getByTestId(icons.facebook['data-testid']);

    expect(facebookIcon).toBeInTheDocument();
  });

  it('renders instagram icon', () => {
    render(<Footer />);

    const instagramIcon = screen.getByTestId(icons.instagram['data-testid']);

    expect(instagramIcon).toBeInTheDocument();
  });

  it('renders twitter icon', () => {
    render(<Footer />);

    const twitterIcon = screen.getByTestId(icons.twitter['data-testid']);

    expect(twitterIcon).toBeInTheDocument();
  });

  it('renders pinterest icon', () => {
    render(<Footer />);

    const pinterestIcon = screen.getByTestId(icons.pinterest['data-testid']);

    expect(pinterestIcon).toBeInTheDocument();
  });
});
