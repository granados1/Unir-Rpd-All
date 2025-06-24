import React, { useState } from "react";
import '../styles/OrderBy.css';

export const OrderBy = ({ onOrderBy }) => {
    const [valueSelect, setOrderBy] = useState('default');

    const handleOrderChange = (event) => {
        const newValue = event.target.value;
        setOrderBy(newValue);
        onOrderBy(newValue);
        console.log('Order by:', newValue);
    };

    return (
        <div className="order-by-container">
            <label htmlFor="order-by">Ordenar por:</label>
            <select id="order-by" value={valueSelect} onChange={handleOrderChange}>
                <option value="default">Predeterminado</option>
                <option value="price-asc">Precio: Bajo a Alto</option>
                <option value="price-desc">Precio: Alto a Bajo</option>
                <option value="year-asc">Año: Más Antiguo a Más Nuevo</option>
                <option value="year-desc">Año: Más Nuevo a Más Antiguo</option>
            </select>
        </div>
    );
}