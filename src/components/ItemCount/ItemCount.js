import React, {Fragment, useState, useContext} from 'react';
import CartContext from "../Context/CartContext";


const ContadorItem = ({stock, onAdd, catalogo}) => {
    

        const { cartProducts, agregarProdCart } = useContext(CartContext);

        /* State */
        const [contador, setContador] = useState(0)
        /* Funciones */

        function sumarStock(){
            if(contador < stock){    
                setContador(contador + 1)
            }
        }

        function restarStock(){
            if(contador > 0){
                setContador(contador - 1)
            }
        }

        function productComplete(){
            let quantity = catalogo
            catalogo.quantity = contador
            console.log(quantity)
            return quantity;
        }


        /* DOM */
    return (
    <Fragment>
    <div>
        <p>{contador}</p>
        <button onClick={restarStock}>-</button>
        <button onClick={sumarStock}>+</button>
        <button onClick={() => agregarProdCart(productComplete())}>Agregar Carrito</button>

    </div>
    </Fragment>
    );
}


export default ContadorItem;