import React, { Fragment, useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import datosProductos from "../datosProductos";


const ItemDetailContainer = () =>{
    
    
    const [itemDetails, setItemDetail] = useState([])
    
    
    const getItem = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                return resolve(datosProductos);
            })
        }, 2000)
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