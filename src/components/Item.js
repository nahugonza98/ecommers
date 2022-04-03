import React, {Fragment, useState, useEffect} from "react";
import ItemList from './ItemList'
import datosProductos from '../datosProductos'

/* Import MUI */
const Item = () => {


const [productos, setProductos] = useState([])

const getProductos = () =>{
    
    return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                console.log("SetTimeout Completado")
                return resolve(datosProductos);
            })
        }, 2000)
}

useEffect(() => {
    getProductos().then( (productos) =>{
        setProductos(productos)
    })
}, [])



console.log(typeof productos)


return (
    <Fragment>
        <ItemList items={productos}/>
    </Fragment>
);
};
export default Item;


/* , agregar CSS, solucionar que este uno encima de otro */