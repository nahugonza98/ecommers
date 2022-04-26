    import React, { Fragment, useState, useContext } from "react";
    import CartContext from "../Context/CartContext";
    import { Link } from "react-router-dom";


    const ContadorItem = ({ stock, catalogo }) => {
    /* Context */
    const { cartProducts, agregarProdCart } = useContext(CartContext);

    /* State */
    const [contador, setContador] = useState(0);
    const [valorCount, setValorCount] = useState(false);

    /* Funciones */

    function sumarStock() {
        if (contador < stock) {
        setContador(contador + 1);
        setValorCount(true)
        }
    }

    function restarStock() {
        if (contador > 0) {
        setContador(contador - 1);
        setValorCount(false);
        }
    }

    function productComplete() {
        let quantity = catalogo;
        catalogo.quantity = contador;
        console.log(quantity);
        return quantity;
    }

    
    
    
    function seguirCompra() {
        valorCount ? onAdd() : (text) => borrarTitulo(text);
        /* if(valorCount == true){
            onAdd()
        }else{
            (text) => borrarTitulo(text)
            console.log("chau")
        } */
    }
    
    function onAdd(){
        return (
            <div className="seguirCompra">
                {console.log("valorCount es ", valorCount)}
                <Link to="/cart">
                <button
                    className="btnSeguirCompra"
                    onClick={() => agregarProdCart(productComplete())}
                >
                    Ir al carrito y finalizar compra
                </button>
                </Link>

                <Link to="/">
                <button className="btnSeguirCompra">Seguir comprando</button>
                </Link>
            </div>
            )}

    const borrarTitulo = (text) => {
        setValorCount(text);
    };

    /* DOM */
    return (
        <Fragment>
        <div>
            <p>{contador}</p>
            <button onClick={restarStock}>-</button>
            <button onClick={sumarStock}>+</button>
            <button onClick={seguirCompra}>Añadir al Carro</button>
        </div>
        </Fragment>
    );
    };

    
                    

{/* <button onClick={() => agregarProdCart(productComplete())}>
Agregar Carrito
</button>;
*/}
export default ContadorItem;