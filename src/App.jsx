import { TextProvider } from './context/text-context';
import Button from './components/button';

const text = 'Agregar al carrito';

export default function App() {
  return (
    <TextProvider value={text}>
      <Button onClick={() => alert(`The text value outside the provider: "${text}"`)} />
    </TextProvider>
  );
}
