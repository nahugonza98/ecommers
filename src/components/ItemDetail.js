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
    const info = data.data
    

    
    const {id, category} = useParams()


    const [product, setProduct] = useState({})

    useEffect( ()=> {
        productoFiltrado()
    }, [id])

    const productoFiltrado = () =>{
        return datosProductos.map( (producto) => {
            if(producto.id == id){
                return setProduct(product)
            }
        })
    }

    return (
        <Fragment>
            <h2>PRUEBA</h2>
            {/* Ejemplo de Prueba */}
            {/* Mapear Para que estes los detalles correctos */}
            <div>
                        <Card  sx={{ maxWidth: 345 }}>
                            <CardHeader title="" />
                            <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            <CardMedia component="img" image="" height="194" alt='imagen'/>
                                Stock Disponible: ""
                            </Typography>
                            $""
                            </CardContent>
                        </Card> 
                        

            </div>
            
        </Fragment>
    )
}


export default ItemDetail;