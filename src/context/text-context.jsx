import { createContext, useState } from 'react';
import { node, string } from 'prop-types';

export const TextContext = createContext(null);

const { Provider } = TextContext;

export function TextProvider({ children, value }) {
  const [text] = useState(value);
  return <Provider value={{ text }}>{children}</Provider>;
}

TextProvider.propTypes = {
  children: node.isRequired,
  value: string,
};
