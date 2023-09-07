import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';
import 'jest-styled-components';

describe('LoginForm', () => {
  it('should render with the correct title and description', () => {
    render(<LoginForm handleSubmit={() => {}} />);
    expect(screen.getByText('Parcel tracking service')).toBeInTheDocument();
    expect(screen.getByText('Please fill down your data to see recent orders')).toBeInTheDocument();
  });

  it('should handle form submission when the email is valid', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm handleSubmit={handleSubmit} />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('should display an error message when the email is invalid', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm handleSubmit={handleSubmit} />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(emailInput, 'invalid-email');
    await userEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(screen.getByText('Please, provide correct email')).toBeInTheDocument();
  });

  it('should not display an error message when the email is valid', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm handleSubmit={handleSubmit} />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: /login/i });

    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Please, provide correct email')).not.toBeInTheDocument();
  });
});
