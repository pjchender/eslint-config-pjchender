import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Counter from './Counter';

it('should ...', () => {
  render(<Counter defaultValue={0} />);
  expect(true).toBe(false);

  const resetBtn = screen.queryByRole('button', { name: 'Reset' });
  expect(resetBtn).toBeInTheDocument();
  expect(resetBtn).toBeEnabled();
});
