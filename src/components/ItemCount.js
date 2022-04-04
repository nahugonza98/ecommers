import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

const ContadorItem = ({stock}) => {

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

        function addOn(){
                console.log("Producto agregado al Carrito correctamente");
                setContador(0)
        }


        /* DOM */
    return(
        <Fragment>
            <div>
            <p>{contador}</p>
            <button onClick={restarStock}>-</button>
            <button onClick={sumarStock}>+</button>
            <button onClick={addOn}>Agregar Al Carrito</button>
            
            </div>
        </Fragment>
    )
}


export default ContadorItem;