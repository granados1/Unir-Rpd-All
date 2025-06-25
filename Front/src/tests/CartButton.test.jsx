// src/tests/CartButton.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import CartButton from '../components/VerCarrito'; // Ajusta la ruta si es necesario
import { vi } from 'vitest';

// Mockear el módulo useCarrito
// Esto debe hacerse ANTES de importar el componente CartButton
// que usa el hook.
vi.mock('../Hooks/useCarrito', () => ({
  default: vi.fn(), // Exporta una función mock para el default export
}));

// Importa el mock después de mockear el módulo
import useCarrito from '../Hooks/useCarrito'; // Ahora esto importa nuestra función mock

describe('CartButton', () => {
  // Antes de cada prueba, reseteamos el mock para asegurar que cada test es independiente
  beforeEach(() => {
    useCarrito.mockClear();
  });

  test('debe renderizar "Ver carrito" y mostrar 0 items / $0.00 cuando el carrito está vacío', () => {
    // Configura el mock de useCarrito para devolver un carrito vacío
    useCarrito.mockReturnValue({
      carrito: [],
      cupon: null,
    });

    render(<CartButton onClick={() => {}} />);

    // Verifica el texto del botón
    expect(screen.getByText('Ver carrito')).toBeInTheDocument();
    // Verifica el texto del badge con 0 items y 0 costo
    expect(screen.getByText('0 / $0.00')).toBeInTheDocument();
  });

  test('debe mostrar el número correcto de items y el costo total sin cupón', () => {
    // Configura el mock para devolver items en el carrito
    useCarrito.mockReturnValue({
      carrito: [
        { id: 1, name: 'Item 1', price: 10.00, quantity: 1 },
        { id: 2, name: 'Item 2', price: 20.50, quantity: 2 },
      ],
      cupon: null,
    });

    render(<CartButton onClick={() => {}} />);

    // Calcula los totales esperados
    const expectedItems = 1 + 2; // 3
    const expectedCost = 10.00 * 1 + 20.50 * 2; // 10.00 + 41.00 = 51.00

    expect(screen.getByText(`${expectedItems} / $${expectedCost.toFixed(2)}`)).toBeInTheDocument();
  });

  test('debe mostrar el costo total con descuento aplicado si hay un cupón', () => {
    // Configura el mock para devolver items y un cupón
    useCarrito.mockReturnValue({
      carrito: [
        { id: 1, name: 'Item 1', price: 50.00, quantity: 1 },
      ],
      cupon: { name: 'DESC10', discount: 0.10 }, // 10% de descuento
    });

    render(<CartButton onClick={() => {}} />);

    // Calcula los totales esperados
    const totalCost = 50.00;
    const discount = totalCost * 0.10; // 5.00
    const expectedTotal = totalCost - discount; // 45.00

    expect(screen.getByText(`1 / $${expectedTotal.toFixed(2)}`)).toBeInTheDocument();
  });

  test('debe llamar a la función onClick cuando se hace clic en el botón', () => {
    // Configura el mock para cualquier estado (no afecta esta prueba)
    useCarrito.mockReturnValue({
      carrito: [],
      cupon: null,
    });

    // Crea una función mock para la prop onClick
    const mockOnClick = vi.fn();
    render(<CartButton onClick={mockOnClick} />);

    // Simula un clic en el botón
    fireEvent.click(screen.getByRole('button', { name: /Ver carrito/i }));

    // Verifica que la función mockOnClick fue llamada
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});