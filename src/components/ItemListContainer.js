import React from 'react';
import ContadorItem from './ItemCount';


function ItemListContainer () {
    return(
        <>
        <h2>Lista de Productos</h2>
        <ContadorItem stock= "5" ></ContadorItem>
        </>
        )
}

export default ItemListContainer;