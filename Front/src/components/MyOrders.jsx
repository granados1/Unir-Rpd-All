import React, { useState, useEffect } from 'react';
import '../styles/MyOrders.css';
import { SearchBar } from './SearchBar.jsx';
import { OrderBy } from './OrderBy.jsx';
import { FilterBy } from './FilterBy.jsx';

export const MyOrders = ({ pedidos, search: initialSearch, order: strDefault, filtered: initialFiltered }) => {

    const [searchQuery, setQuery] = useState(initialSearch || '');
    const [orderBy, setOrderBy] = useState(strDefault || 'default');
    const [filteredLibros, setFilteredLibros] = useState(pedidos);
    const [filteredBy, setFilteredBy] = useState(initialFiltered || '');

    const handleSearch = (query) => {
        console.log('Search query en MyOrders:', query);
        setQuery(query);
    };

    const handleOrder = (valueOrder) => {
        setOrderBy(valueOrder);
        console.log('OrderBy en MyOrders:', valueOrder);
    };

    const handleFilter = (valueFilter) => {
        setFilteredBy(valueFilter);
        console.log('FilterBy en ProductList:', valueFilter);
    }


    useEffect(() => {
        let newFilteredLibros = [...(searchQuery
            ? pedidos.filter((pedido) => pedido.title.toLowerCase().includes(searchQuery.toLowerCase())
                || pedido.date.toLowerCase().includes(searchQuery.toLowerCase())
                || pedido.state.toLowerCase().includes(searchQuery.toLowerCase())
                || pedido.tracking.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : pedidos)];

         if (filteredBy !== '' && !isNaN(filteredBy)) {
            newFilteredLibros = newFilteredLibros.filter((pedido) => pedido.price >= 0 && pedido.price <= Number(filteredBy));
        }

        switch (orderBy) {
            case 'price-asc':
                newFilteredLibros.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                newFilteredLibros.sort((a, b) => b.price - a.price);
                break;
            case 'year-asc':
                newFilteredLibros.sort((a, b) => Number(a.year) - Number(b.year));
                break;
            case 'year-desc':
                newFilteredLibros.sort((a, b) => Number(b.year) - Number(a.year));
                break;
            default:
                break;
        }
        setFilteredLibros(newFilteredLibros);
    }, [pedidos, searchQuery, orderBy]);

    return (
        <>
            <div className="search--order--container">
                <SearchBar onSearch={handleSearch} />
                <OrderBy onOrderBy={handleOrder}/>
                <FilterBy onFilterBy={handleFilter}/>
            </div>

            <div className="product--list--container">
             
                   <table className='table--orders'>
                      <thead>
                        <tr>
                          <th>Fecha de compra</th>
                          <th>Código de seguimiento</th>
                          <th>Productos</th>
                          <th>Estado</th>
                          <th>Valor Pagado</th>
                          <th>Seguimiento</th>
                          <th>Soporte</th>
                        </tr>
                      </thead>
                      <tbody>
                         {filteredLibros.map((pedido) => (
                            <tr key={pedido.id}>
                              <td>{pedido.date}</td>
                              <td>{pedido.tracking}</td>
                              <td>{pedido.title} <br />{pedido.title2}</td>
                              <td>{pedido.state}</td>
                              <td>{pedido.price}</td>
                              <td>
                                 <div  style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                                  {(pedido.state === 'Preparación' || pedido.state === 'Enviado') && (
                                      <button
                                        className='boton--actions'
                                        onClick={() => alert(`Acción para ${pedido.title}`)}
                                      >
                                        Seguimiento         
                                      </button>
                                    )}

                                   {pedido.state === 'Preparación'  && (
                                     <>
                                      <button
                                        className='boton--actions'
                                        onClick={() => alert(`Acción para ${pedido.title}`)}
                                      >
                                        Modificar        
                                      </button>
                                      <button
                                        className='boton--actions'
                                        onClick={() => alert(`Acción para ${pedido.title}`)}
                                      >
                                        Cancelar        
                                      </button>
                                       </>
                                    )}

                                  {pedido.state === 'Entregado' && (
                                      <button
                                        className='boton--actions'
                                        onClick={() => alert(`Acción para ${pedido.title}`)}
                                      >
                                        Volver a comprar        
                                      </button>
                                    )}
                                </div>
                              </td>
                              <td>
                                <div className="buttons-container-detail">
                                  <button className="add-to-cart-button-detail">Reportar Problemas</button>                                
                                </div></td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
              
            </div>
        </>
    );
};