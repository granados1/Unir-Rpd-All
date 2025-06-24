import React, { useState } from "react";
import useCarrito from "../Hooks/useCarrito";
import "../styles/Cupon.css";

const CouponInput = () => {
    const { aplicarCupon, cupon } = useCarrito();
    const [code, setCode] = useState("");

    return (
        <div className="coupon--container">
            <label className="coupon--label">Cupón de descuento</label>
            <div className="famiia coupon--form">
                <input
                    type="text"
                    className="familia coupon--input"
                    placeholder="Ej: DESCUENTO10"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button onClick={() => aplicarCupon(code)} className="botondes boton--cupon familia">
                    Aplicar
                </button>
            </div>
            {cupon && (
                <p className="coupon--success">
                    Cupón aplicado: <strong>{cupon.code}</strong>
                </p>
            )}
        </div>
    );
};

export default CouponInput;
