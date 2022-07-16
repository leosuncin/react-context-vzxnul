import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from './App';
import { AppProvider } from './AppProvider';

test('render App', async () => {
  render(
    <AppProvider>
      <App />
    </AppProvider>,
  );

  expect(screen.getByText(/some value/)).toBeInTheDocument();

  user.click(screen.getByRole('button'));

  await expect(
    screen.findByText(/Some new value/),
  ).resolves.toBeInTheDocument();
});
