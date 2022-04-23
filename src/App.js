import NavBar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart'
import {CartProvider} from "./components/Context/CartContext"
function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<HomePage />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}


export default App;

/* Detalles a terminar
1. Corregir problemas con las rutas de imagenes - Listo
2. "Continuar Comprando" debe redireccionar a home - Listo
3. Cuando quite algun producto de la compra debe actualizar el precio total -Listo
4. Tema CSS
5. Agregar al menos 4 productos
6. Poner un contador para agregar directamente el numero de prod a comprar
7. Categorias {zapatilla no funciona}
8. Validaciones de formulario
9. Que el contador del detalle funcione*/