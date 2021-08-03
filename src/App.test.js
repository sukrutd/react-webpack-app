import { render, screen } from '@testing-library/react';

import App from './App';

test('renders a message', () => {
    render(<App />);
    expect(screen.getByText(/react app/i)).toBeInTheDocument();
});

test('button renders correctly', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Learn React');
    expect(button).toBeEnabled();
});
