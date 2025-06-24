import React, { useState } from 'react';
import '../styles/General.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header.jsx';
import { Footer } from "../components/Footer.jsx";
import { libros } from '../data/libros.jsx';
import { pedidos } from '../data/pedidos.jsx';
import { soportes } from '../data/soportes.jsx';
import { ProductList } from '../components/ProductList.jsx';
import { MyOrders } from '../components/MyOrders.jsx';
import NavBarComponent from '../components/NavbarComponent.jsx';
import LandingPageComponent from '../components/LandingPageComponent.jsx';
import { Support } from '../components/Support.jsx';
import { useInactivityRedirect } from '../Hooks/useInactivityRedirect.jsx';

/*..
Para agregar nuevas rutas, agreguen dentro del tag Routes el siguiente tag:
<Route path='/rutadelcomponente' element={<NombreDelComopnente />} />

- El componente debe estar importado en la parte de arriba.
- La ruta puede ser cualquier String mientras sea unica.
- Recuerden modificar el NavbarComponent si agregan nuevas rutas.
*/

export const General = () => {
    const [searchQuery, setQuery] = useState('');
    const [orderBy, setOrderBy] = useState('default');
    const [filteredLibros, setFilteredLibros] = useState('');

    useInactivityRedirect(5000);  //5 seg

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow">
                <NavBarComponent />
                <div className="flex-grow flex flex-col">
                    <Routes>
                        <Route path='/' element={<LandingPageComponent />} />
                        <Route path='/productlist' element={<ProductList libros={libros} search={searchQuery} order={orderBy}/>} />
                         <Route path='/support' element={<Support soportes={soportes} search={searchQuery} order={orderBy} filtered={filteredLibros}/>} /> 
                        <Route path='/myorders' element={<MyOrders pedidos={pedidos} search={searchQuery} order={orderBy} filtered={filteredLibros}/>} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    );
};