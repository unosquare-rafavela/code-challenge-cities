import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import App from './App';

describe('App', () => {
  test('should render Hello text', () => {
    render(<App />);
    const helloText = screen.getByText(/Hello/i);
    expect(helloText).toBeInTheDocument();
  });
});