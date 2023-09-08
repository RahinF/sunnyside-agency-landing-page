import MobileNavigation from '@app/components/Navigation/Mobile';
import links from '@app/components/Navigation/data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Mobile Navigation', () => {
  it('renders hamburger button', () => {
    render(<MobileNavigation />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders no links when menu is closed', async () => {
    render(<MobileNavigation />);

    const links = screen.queryAllByRole('link');

    expect(links).toHaveLength(0);
  });

  it('renders links when menu is open', async () => {
    render(<MobileNavigation />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const navLinks = screen.queryAllByRole('link');
    expect(navLinks).toHaveLength(links.length);
  });

  it('renders no links when menu is opened then closed', async () => {
    render(<MobileNavigation />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const navLinks = screen.queryAllByRole('link');
    expect(navLinks).toHaveLength(links.length);

    await userEvent.click(button);

    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('closes the menu when a link is clicked', async () => {
    render(<MobileNavigation />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const navLinks = screen.queryAllByRole('link');
    expect(navLinks).toHaveLength(links.length);

    await userEvent.click(navLinks[0]);

    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });
});
