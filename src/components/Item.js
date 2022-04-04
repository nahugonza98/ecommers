import React, {Fragment, useState, useEffect} from "react";
import ItemList from './ItemList'
import datosProductos from '../datosProductos'
import { useParams } from 'react-router-dom'

/* Import MUI */
const Item = () => {

const { category } = useParams();


const [productos, setProductos] = useState([])

const getProductos = () =>{
    
    return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                return resolve(datosProductos);
            })
        }, 2000)
}

useEffect(() => {
    setProductos([]);
    getProductos().then( (productos) =>{
        category ? filtroCategorias(productos, category) : setProductos(productos)
    })
}, [category])


const filtroCategorias = (productos, category)=> {
    return productos.map((producto)=>{
        if(producto.category == category){
            return setProductos(productos => [...productos, producto])
        }
    })
}


return (
    <Fragment>
        <ItemList items={productos}/>
    </Fragment>
);
};
export default Item;


