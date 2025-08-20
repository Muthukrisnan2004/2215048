import { render, screen, fireEvent } from '@testing-library/react';
import UrlForm from '../components/UrlForm';

describe('UrlForm', () => {
  test('validates URL input', () => {
    const mockOnShorten = jest.fn();
    render(<UrlForm onShorten={mockOnShorten} />);
    
    const input = screen.getByPlaceholderText('Enter a URL');
    const button = screen.getByText('Shorten URL');
    
    fireEvent.change(input, { target: { value: 'invalid-url' } });
    fireEvent.click(button);
    
    expect(screen.getByText('Please enter a valid URL')).toBeInTheDocument();
    expect(mockOnShorten).not.toHaveBeenCalled();
  });
});