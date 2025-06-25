// src/tests/SearchBar.test.jsx

// Importa las utilidades necesarias de React Testing Library
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// Importa el componente que vamos a probar
import { SearchBar } from '../components/SearchBar'; // Asegúrate que esta ruta sea correcta
// Importa userEvent para simular interacciones de usuario más complejas (como escribir)
import userEvent from '@testing-library/user-event';
// Importa 'vi' de Vitest para crear funciones mock
import { vi } from 'vitest';

// Describe un bloque de pruebas para el componente SearchBar
describe('SearchBar', () => {

  // Prueba 1: Verifica que el placeholder se renderice correctamente
  test('debe renderizar el placeholder "Palabra clave..."', () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/Palabra clave.../i)).toBeInTheDocument();
  });

  // Prueba 2: Verifica que el valor del input cambie al escribir
  test('debe actualizar el valor del input al escribir', async () => { // <--- Añade async aquí
    render(<SearchBar onSearch={() => {}} />);
    const searchInput = screen.getByPlaceholderText(/Palabra clave.../i);

    await userEvent.type(searchInput, 'testing'); // <--- Añade await aquí
    expect(searchInput.value).toBe('testing');
  });

  // Prueba 3: Verifica que onSearch se llame con el valor correcto al presionar Enter
  test('debe llamar a onSearch con el valor correcto cuando se presiona Enter', async () => { // <--- Añade async aquí
    // Usa vi.fn() en lugar de jest.fn()
    const mockOnSearch = vi.fn(); // <--- Cambio aquí
    render(<SearchBar onSearch={mockOnSearch} />);
    const searchInput = screen.getByPlaceholderText(/Palabra clave.../i);

    await userEvent.type(searchInput, 'buscar algo'); // <--- Añade await aquí
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    // waitFor es útil si esperas una actualización asíncrona, aunque fireEvent suele ser síncrono.
    // Sin embargo, para consistencia y robustez, es buena práctica si hay algún efecto secundario.
    await waitFor(() => { // <--- Añade await waitFor aquí
        expect(mockOnSearch).toHaveBeenCalledTimes(1);
        expect(mockOnSearch).toHaveBeenCalledWith('buscar algo');
    });
  });

  // Prueba 4: Verifica que onSearch se llame con el valor correcto al presionar Backspace
  test('debe llamar a onSearch con el valor correcto cuando se presiona Backspace', async () => { // <--- Añade async aquí
    const mockOnSearch = vi.fn(); // <--- Cambio aquí
    render(<SearchBar onSearch={mockOnSearch} />);
    const searchInput = screen.getByPlaceholderText(/Palabra clave.../i);

    await userEvent.type(searchInput, 'prueba'); // <--- Añade await aquí
    fireEvent.keyDown(searchInput, { key: 'Backspace', code: 'Backspace' });

    await waitFor(() => { // <--- Añade await waitFor aquí
        expect(mockOnSearch).toHaveBeenCalledTimes(1);
        expect(mockOnSearch).toHaveBeenCalledWith('prueba');
    });
  });

  // Prueba adicional: Verifica que onSearch NO se llame con otras teclas
  test('NO debe llamar a onSearch con teclas que no sean Enter o Backspace', async () => { // <--- Añade async aquí
    const mockOnSearch = vi.fn(); // <--- Cambio aquí
    render(<SearchBar onSearch={mockOnSearch} />);
    const searchInput = screen.getByPlaceholderText(/Palabra clave.../i);

    await userEvent.type(searchInput, 'texto'); // <--- Añade await aquí
    fireEvent.keyDown(searchInput, { key: 'A', code: 'KeyA' });

    // No necesitamos waitFor aquí porque esperamos que NO se llame, lo cual es síncrono.
    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});