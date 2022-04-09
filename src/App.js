import NavBar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import ItemDetail from "./components/ItemDetail/ItemDetail";
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
            <Route path="/detalle/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}


export default App;
