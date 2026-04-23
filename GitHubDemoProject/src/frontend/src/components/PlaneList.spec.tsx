import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import PlaneList from './PlaneList';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('PlaneList', () => {
  it('should navigate when clicking on a plane', async () => {
    const user = userEvent.setup();
    const planes = [
      { id: 1, name: "Wright Flyer", year: 1903 },
      { id: 2, name: "Wright Model A", year: 1905 },
      { id: 3, name: "Wright Model B", year: 1910 },
    ];

    render(
      <MemoryRouter>
        <PlaneList planes={planes} />
      </MemoryRouter>
    );

    const firstPlaneItem = screen.getByText('Wright Flyer').closest('li');
    if (firstPlaneItem) {
      await user.click(firstPlaneItem);
    }

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/planes/1');
    }, { timeout: 3000 });
  });
});