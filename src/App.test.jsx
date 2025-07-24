import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import App from './App';

describe('App', () => {
  test('Should render the Cities title', () => {
    render(<App />);
    const title = screen.getByText(/Cities/i);
    expect(title).toBeInTheDocument();
  });
});