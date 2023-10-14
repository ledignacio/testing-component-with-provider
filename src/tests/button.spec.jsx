import { expect, test, vi } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "../components/button";
import { TextProvider } from "../context/text-context";

const renderWithProvider = (children, providerProps) => {
  return render(<TextProvider value={providerProps}>{children}</TextProvider>);
};

test('click Button', async () => {
  const handleClick = vi.fn();
  const user = userEvent.setup();

  renderWithProvider(<Button onClick={handleClick} />, 'Agregar al carrito');

  const button = screen.getByRole("button", {
    name: 'Agregar al carrito'
  });

  await user.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
