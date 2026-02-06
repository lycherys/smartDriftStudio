// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders smartDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/smartDrift/i);
    expect(titleElement).toBeInTheDocument();
});
