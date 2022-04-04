import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<HomePage />} />
            <Route path="/detalle/:id" element={<ItemDetail />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
