    import React, {Fragment, useEffect, useState} from 'react';
    import {useParams} from 'react-router-dom'
    import ItemCount from '../ItemCount/ItemCount'
    import db from '../../firebaseconfig'
    import { doc, getDoc} from "firebase/firestore";

    /* Import MUI */
    import Card from "@mui/material/Card";
    import CardHeader from "@mui/material/CardHeader";
    import CardMedia from "@mui/material/CardMedia";
    import CardContent from "@mui/material/CardContent";
    import Typography from "@mui/material/Typography";



    function ItemDetail({data}){


        /* Traigo el ID con el useParams */
        const {id} = useParams()

        const [product, setProduct] = useState({})

            useEffect(  ()=> {
                
                const getData = async (id) => {
                    const docRef = doc(db, 'productos', id)
                    const docSnap = await getDoc(docRef)
                    const findProducto = docSnap.data()
                    setProduct(findProducto)
                }
                getData(id)
                }, [])



        return (
            <Fragment>

                <div>
                            <Card  sx={{ maxWidth: 345 }}>
                                <CardHeader title={product.title} />
                                <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                <CardMedia component="img" image={product.image} height="194" alt='imagen'/>
                                    Stock Disponible: {product.stock}
                                </Typography>
                                ${product.price}
                                </CardContent>
                            </Card> 
                            <div>
            
                <ItemCount stock={product.stock}/>
                </div>

                </div>
                
            </Fragment>
        )
    }

/*     function seguirCompra () {
        return (
        <div className='seguirCompra'>
        <Link to='/cart'><button className='btnSeguirCompra'>Ir al carrito y finalizar compra</button></Link>
        <Link to='/'><button className='btnSeguirCompra'>Seguir comprando</button></Link>
        </div>
        )
    }

    const [valorCount, setValorCount] = useState(false)

        const borrarTitulo = (text) => {
            setValorCount(text)
        } 

    {valorCount ? seguirCompra() : <ItemCount onAdd={(text) => borrarTitulo(text)} stock={product.stock} initial={0} />}
 */


    export default ItemDetail;