import React, { Fragment, useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../firebaseconfig'
import { collection, getDocs} from "firebase/firestore";



const ItemDetailContainer = () =>{

    
    const [itemDetails, setItemDetail] = useState([])
    
    
    const getItem = async () => {
        
        const iCollection = collection(db, 'productos')
        const productoSnap = await getDocs(iCollection)
        /* Devuelve ProductoSnap */
        
        /* Mapeo el Snap para obtener el array de productos */
        const arrayProducts = productoSnap.docs
        console.log(productoSnap)
        return arrayProducts;
    };
    
    useEffect(() => {
        getItem().then( (itemDetails) =>{
            setItemDetail(itemDetails);
        })
    }, []);



    return(
        <Fragment>
                <ItemDetail data={itemDetails}/>    
        </Fragment>
    );
    

}

export default ItemDetailContainer;