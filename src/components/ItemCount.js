import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

const ContadorItem = ({stock, onAdd}) => {

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



        /* DOM */
    return(
        <Fragment>
            <div>
            <p>{contador}</p>
            <button onClick={restarStock}>-</button>
            <button onClick={sumarStock}>+</button>
            <button onClick={() => onAdd(true)}>Añadir al carrito</button>

            
            </div>
        </Fragment>
    )
}


export default ContadorItem;