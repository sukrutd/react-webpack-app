import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders a message', () => {
    render(<App />);
    expect(screen.getByText('React App')).toBeInTheDocument();
});
