import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import datosProductos from '../datosProductos';


/* Import MUI */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function ItemDetail(data){
   /*  const info = data.data
    const {image, title, stock, price} = info */

    
    const {id, category} = useParams()
    console.log("Estas en el ID num: ", id)

    const [product, setProduct] = useState({})

    useEffect( ()=> {
        productoFiltrado()
    }, [id])

    const productoFiltrado = () =>{
        return datosProductos.map( (product) => {
            if(product.id == id){
                return setProduct(product)
            }
        })
    }

    return (
        <Fragment>
            {/* Ejemplo de Prueba */}
            {/* <div>
                        <p>ABC</p>
                        <Card  sx={{ maxWidth: 345 }}>
                            <CardHeader title={title} />
                            <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            <CardMedia component="img" image={image} height="194" alt='imagen'/>
                                Stock Disponible: {stock}
                            </Typography>
                            ${price}
                            </CardContent>
                        </Card> 
                        

            </div> */}
            <h2>Prueba</h2>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.talle}</p>

        </Fragment>
    )
}


export default ItemDetail;