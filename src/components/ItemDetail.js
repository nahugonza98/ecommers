import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import datosProductos from '../datosProductos';
import ItemCount from './ItemCount'

/* Import MUI */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'

function seguirCompra () {
  return (
    <div className='seguirCompra'>
      <Link to='/cart'><button className='btnSeguirCompra'>Ir al carrito y finalizar compra</button></Link>
      <Link to='/'><button className='btnSeguirCompra'>Seguir comprando</button></Link>
    </div>
  )
}


function ItemDetail(data){
    const info = data.data
console.log(data)

    
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

    function addOn(){
        console.log("Producto agregado al Carrito correctamente");
        setContador(0)
}

const [valorCount, setValorCount] = useState(false)
  const borrarTitulo = (text) => {
    setValorCount(text)
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
                        <div>
        {valorCount ? seguirCompra() : <ItemCount onAdd={(text) => borrarTitulo(text)} stock={10} initial={0} />}
        </div>

            </div>
            
        </Fragment>
    )
}


export default ItemDetail;