// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MineHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MineHub/i);
    expect(titleElement).toBeInTheDocument();
});
