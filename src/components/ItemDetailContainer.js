import React, { Fragment, useEffect, useState } from "react";
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () =>{
    
    /* MOCK */
    const mockProduct =
        {
            id: 1,
            title: "Producto de Prueba",
            price: 12000,
            stock: 10,
            image: 'https://http2.mlstatic.com/D_NQ_NP_604604-MLA44866139910_022021-W.jpg',
        }
        ;
    /* Fin del MOCK */
    
    
    const [itemDetails, setItemDetail] = useState([])
    
    
    const getItem = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                return resolve(mockProduct);
            })
        }, 2000)
    };
    
    
    useEffect(() => {
        getItem().then( (itemDetails) =>{
            setItemDetail(itemDetails);
        })
    }, []);

    console.log(itemDetails)
    return(
        <Fragment>
                <ItemDetail data={itemDetails}/>    
        </Fragment>
    );
    

}

export default ItemDetailContainer;