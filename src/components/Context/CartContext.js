/* Importaciones */
import React, {useState, createContext} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) =>{

    /* Logica */

    const [cartProducts, setCartProducts] = useState([])

    const agregarProdCart = (producto) =>{
            console.log("Se ha agregado ", producto)
    }

    const data = {
        cartProducts,
        agregarProdCart
    }

    /* JSX */
    return(
        <CartContext.Provider value={data}>
            {children}

        </CartContext.Provider>
    )
}





export {CartProvider}
export default CartContext;





/* PASOS A SEGUIR
1- Importamos createContext de React 
2- Guardar en una CONST el createContext()
3- Creamos el Provider (proveedor) con props llamada {Children}
4- Dentro del return, escribimoms nuestra const. provider (paso2.provider)
5- Exportamos
*/
