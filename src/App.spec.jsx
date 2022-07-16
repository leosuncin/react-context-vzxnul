import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from './App';

test('render App', async () => {
  render(<App />);

  expect(screen.getByRole('button')).toHaveTextContent('count is 0');

  user.click(screen.getByRole('button'));

  await expect(
    screen.findByRole('button', { name: 'count is 1' }),
  ).resolves.toBeInTheDocument();
});
