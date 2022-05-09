    import React, { Fragment, useState, useContext } from "react";
    import CartContext from "../Context/CartContext";
    import { Link } from "react-router-dom";
    /* Import MUI */
    import Stack from "@mui/material/Stack";
    import Button from "@mui/material/Button";
    /* ImportCss */
    import "./ItemCount.css"

    const ContadorItem = ({ stock, catalogo, initial }) => {
    /* Context */
    const { cartProducts, agregarProdCart } = useContext(CartContext);
    /* State */
    const [contador, setContador] = useState(initial);
    const [valorCount, setValorCount] = useState(false);
    /* Funciones */
    function sumarStock() {
        if (contador < stock) {
        setContador(contador + 1);
        setValorCount(true);
        }
    }

    function restarStock() {
        if (contador > initial) {
        setContador(contador - 1);
        }else if(contador == initial){
            setValorCount(false);
        }
    }

    function productComplete() {
        let quantity = catalogo;
        catalogo.quantity = contador;
        return quantity;
    }

    function onAdd(){
    return (
    <div className="seguirCompra">
    <Link to="/cart" className="link">
    <Stack direction="row" spacing={2} className="btnFinalizar">
    <Button variant="contained" color="success" className="btnSeguirCompra" onClick={() => agregarProdCart(productComplete())}>
        Añadir al Carro
    </Button>
</Stack>
    </Link>

    <Link to="/" className="link">
        <Stack direction="row" spacing={2} className="Stack">
            <Button variant="outlined" color="secondary" className="btnSeguirCompra"> Seguir Comprando</Button>
            </Stack>
    </Link>
</div>
)}
    /* DOM */
    return (
        <Fragment>
            <div className="countDiv">
            <p className="contador">{contador}</p>
            <button onClick={restarStock}>-</button>
            <button onClick={sumarStock}>+</button>
            {valorCount && onAdd()}
            </div>
        </Fragment>
    );
    };

export default ContadorItem;