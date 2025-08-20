import { render, screen, fireEvent } from '@testing-library/react';
import App from '../Middleware/App';

describe('URL Shortener App', () => {
  test('renders main navigation', () => {
    render(<App />);
    expect(screen.getByText('URL Shortener')).toBeInTheDocument();
    expect(screen.getByText('Statistics')).toBeInTheDocument();
  });
});