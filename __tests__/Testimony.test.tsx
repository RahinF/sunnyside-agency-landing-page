import Testimony from '@components/Testimonials/Testimony';
import testimonials from '@components/Testimonials/data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Testimony', () => {
  const user = testimonials[0];
  it('renders an avatar', () => {
    render(
      <Testimony
        name={user.name}
        role={user.role}
        testimony={user.testimony}
        avatar={user.avatar}
      />,
    );

    const avatar = screen.getByRole('img');

    expect(avatar).toBeInTheDocument();
  });

  it('renders paragraph text', () => {
    render(
      <Testimony
        name={user.name}
        role={user.role}
        testimony={user.testimony}
        avatar={user.avatar}
      />,
    );

    const paragraph = screen.getByText(user.testimony);

    expect(paragraph).toBeInTheDocument();
  });

  it('renders heading with a users name', () => {
    render(
      <Testimony
        name={user.name}
        role={user.role}
        testimony={user.testimony}
        avatar={user.avatar}
      />,
    );

    const name = screen.getByRole('heading', { name: user.name });

    expect(name).toBeInTheDocument();
  });

  it('renders a users role', () => {
    render(
      <Testimony
        name={user.name}
        role={user.role}
        testimony={user.testimony}
        avatar={user.avatar}
      />,
    );

    const role = screen.getByText(user.role);

    expect(role).toBeInTheDocument();
  });
});
