import React, { useState, useEffect } from 'react';
import '../styles/MyOrders.css';
import { SearchBar } from './SearchBar.jsx';
import { OrderBy } from './OrderBy.jsx';
import { FilterBy } from './FilterBy.jsx';

export const Support = ({ soportes, search: initialSearch, order: strDefault, filtered: initialFiltered }) => {

    const [searchQuery, setQuery] = useState(initialSearch || '');
    const [orderBy, setOrderBy] = useState(strDefault || 'default');
    const [filteredLibros, setFilteredLibros] = useState(soportes);
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
            ? soportes.filter((soporte) => soporte.type.toLowerCase().includes(searchQuery.toLowerCase())
                || soporte.date.toLowerCase().includes(searchQuery.toLowerCase())
                || soporte.state.toLowerCase().includes(searchQuery.toLowerCase())
                || soporte.description.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : soportes)];

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
    }, [soportes, searchQuery, orderBy]);

    return (
        <>
            <div className="search--order--container">
                <SearchBar onSearch={handleSearch} />
                <OrderBy onOrderBy={handleOrder}/>
                <FilterBy onFilterBy={handleFilter}/>
            </div>

            <div className="support--list--container">
             
                   <table className='table--orders'>
                      <thead>
                        <tr>
                          <th>Fecha de radicación</th>
                          <th>Tipo de solicitud</th>
                          <th>Resumen</th>
                          <th>Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                         {filteredLibros.map((soporte) => (
                            <tr key={soporte.id}>
                              <td>{soporte.date}</td>
                              <td>{soporte.type}</td>
                              <td>{soporte.description}</td>
                              <td>{soporte.state}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
              
            </div>
        </>
    );
};