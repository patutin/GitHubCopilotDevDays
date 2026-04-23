import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Banner from './Banner';

describe('Banner', () => {
  it('should render banner with title', () => {
    render(<Banner />);
    
    expect(screen.getByText('Dawn of Aviation')).toBeInTheDocument();
  });
});