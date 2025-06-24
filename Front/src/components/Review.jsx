import React, { useState } from 'react';

import '../styles/Review.css';
import useCarrito from "../Hooks/useCarrito";

export const Review = ({ libro }) => {
    const { agregarAlCarrito } = useCarrito();
    const [texto, setTexto] = useState('');

    const handleChange = (event) => {
        setTexto(event.target.value);
    };

    const handleClick = (event) => {
       // alert('Texto ingresado: ' + texto);
        setTexto(event.target.value);
    };
    return (
        
            <div className="product-detail">
                <h2 className='product-detail-name'>Reseñas: {libro.title}</h2>
                <div className="product-detail-top">
                    <div className="product--review--image--container">
                        <img src="https://previews.123rf.com/images/pixelalex/pixelalex1702/pixelalex170200045/72228911-icono-de-l%C3%ADnea-de-rese%C3%B1as-de-clientes.jpg" alt="Reseña: {libro.title}" className="product-detail-image" />
                    </div>
                    <div className="product-detail-description">
                        <p>{libro.review}</p>
                    </div>
                    
                </div>
                <div className="product-detail-bottom">
                    

                    <div className="buttons-container-detail">
                        <button
                            onClick={() => agregarAlCarrito(libro)}
                            className="add-to-cart-button-detail"
                        >
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        
    );
}
