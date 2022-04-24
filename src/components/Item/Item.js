import React, {Fragment, useState, useEffect} from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import db from '../../firebaseconfig'
import { collection, getDocs } from "firebase/firestore";

/* Import MUI */
const Item = () => {


/* useParams trae como parametro lo que este con ":" */
const { category } = useParams();


const [productos, setProductos] = useState([])

const getProductos = async () =>{
                        /* db es la base de datos
                        'text'  nombre de la coleccion que deseo conectar*/
    const iCollection = collection(db, 'productos' )
                        /* getDocs trae el listado de los
                        documentos == lista  de Productos de Firestore */
    const productosSnapshot = await getDocs(iCollection)

        /* Mapeamos el Snapchot.docs para
         obtener el array de productos */
    const productList = productosSnapshot.docs.map((doc) => {
            /* Sumar datos + id */
            let product = doc.data()
            product.id = doc.id
            return product
    }
    )
    return productList;
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


