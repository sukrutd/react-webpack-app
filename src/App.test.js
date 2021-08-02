import { render, screen } from '@testing-library/react';

import App from './App';

test('renders a message', () => {
    render(<App />);
    expect(screen.getByText(/react app/i)).toBeInTheDocument();
});
