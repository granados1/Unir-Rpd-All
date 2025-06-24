import React, { useState } from "react";
import '../styles/FilterBy.css';

export const FilterBy = ({ onFilterBy }) => {
    const [showModal, setShowModal] = useState(false);
    const [price, setPrice] = useState(0);

    const handlePriceChange = (event) => {
        const newPrice = Number(event.target.value);
        setPrice(newPrice);
        onFilterBy(newPrice);
        console.log('Precio seleccionado:', newPrice);
    };

    const handleIconClick = () => setShowModal((prev) => !prev);

    return (
        <div className="filter-by-container">
            <label htmlFor="filter-by" className="filter-by-label">
                Filtrar por:
                <button
                    type="button"
                    className="filter-icon-btn"
                    onClick={handleIconClick}
                    aria-label="Abrir filtrado"
                >
                    {/* Simple filter icon SVG */}
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 .8 1.6l-4.6 6.2V16a1 1 0 0 1-1.447.894l-2-1A1 1 0 0 1 8 15v-3.2L3.2 6.6A1 1 0 0 1 3 5z" />
                    </svg>
                </button>
            </label>
            {showModal && (
                <div className="filter-modal">
                    <div className="filter-modal-content">
                        <div className="filter-modal-header">
                            <span className="filter-modal-title">Filtrado</span>
                            <button
                                className="close-filter-modal"
                                onClick={() => setShowModal(false)}
                                aria-label="Cerrar"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="filter-price-section">
                            <label htmlFor="price-range" className="filter-price-label">
                                Precio: <span className="filter-price-value">${price}</span>
                            </label>
                            <input
                                id="price-range"
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                value={price}
                                onChange={handlePriceChange}
                                className="filter-price-range"
                            />
                            <div className="filter-price-marks">
                                <span>$0</span>
                                <span>$50</span>
                                <span>$100</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}