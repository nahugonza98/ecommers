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

/* //TODO: Detalles a terminar
1. //? Corregir problemas con las rutas de imagenes - Listo
2. //??"Continuar Comprando" debe redireccionar a home - Listo
3. //?Cuando quite algun producto de la compra debe actualizar el precio total -Listo
4. //*Tema CSS
5. //?Agregar al menos 4 productos - Listo
6. //?Poner un contador para agregar directamente el numero de prod a comprar - Listo
7. //?Categorias {zapatilla no funciona} - Listo
8. //*Validaciones de formulario
9. //?Que el contador del detalle funcione - Listo
10- //? NavBar correcto - Listo
11- //!Boton para seguir comprando o finalizar compra al darle al "agregar a carrito"
11- //!Logica hecha, solo falta descubrir porque los div no se muestran en el dom
12- //?El precio actualizarse por la cantidad - Listo
13- //?En cart solucionar el monto, y cantidad visible - Listo
14-//?Contador del ItemDetail

*VERDE
!ROJO
?AZUL
TODO: NARANJA


*/