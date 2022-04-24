/* Importaciones */
import React, {useState, createContext} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) =>{

    /* Logica */

    const [cartProducts, setCartProducts] = useState([])
    const [totalPrecio, setTotalPrecio] = useState(0)

    const agregarProdCart = (producto) =>{
        /* No repetir Items */
            let exist = cartProducts.find(cartProducts => cartProducts.id === producto.id)
            if(!exist) { 
                setTotalPrecio(totalPrecio + producto.price * producto.quantity)
                setCartProducts(cartProducts => [...cartProducts, producto])
            }
    }

    /* Borrar producto */

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( (cartProduct) => {
            return cartProduct.id !== product.id
        }))
        actualizarPrecio()
    }

    const actualizarPrecio = () =>{
        let actualizar = cartProducts.map( (producto) =>{
            setTotalPrecio(totalPrecio - producto.price * producto.quantity);
        })
        return actualizar
}

    /* Todo lo que se vaya a exportar agrupar en el data  */
    const data = {
        cartProducts,
        agregarProdCart,
        deleteProduct,
        totalPrecio
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
