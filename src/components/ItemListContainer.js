import React from 'react';
import Item from './Item'
import ItemDetailContainer from './ItemDetailContainer';


function ItemListContainer () {
    return(
        <>
        <h2>Lista de Productos</h2>
        <Item />
        <ItemDetailContainer />
        </>
        )
}

export default ItemListContainer;