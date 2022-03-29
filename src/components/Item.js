import React, {Fragment, useState, useEffect} from "react";
/* Import MUI */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
/* Import Componentes */
import ContadorItem from './ItemCount';
/* Import Media */



const ListaDeProductos = () => {
  /* Datos MOCKUP */


    const datosProductos = [
    {
        id: 1,
        title: "Zapatilla",
        price: 15000,
        stock: 10,
        image: 'https://http2.mlstatic.com/D_NQ_NP_604604-MLA44866139910_022021-W.jpg',
    },
    {
        id: 2,
        title: "Botines",
        price: 12000,
        stock: 8,
        image: "https://i.pinimg.com/originals/04/c4/29/04c429f82226a8d217443aa7058bcbbd.jpg",
    },
];

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




return (
    <Fragment>

        <div>{/* Lista */}
            {productos.map((producto) =>{
                const {price, title ,id, stock, image} = producto
                    return(
                    <div key = {id}>
                        <Card  sx={{ maxWidth: 345 }}>
                            <CardHeader title={title} />
                            <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            <CardMedia component="img" image={image} height="194" alt='imagen'/>
                                Stock Disponible: {stock}
                            </Typography>
                            ${price}
                            </CardContent>
                            <ContadorItem stock={stock}></ContadorItem>
                        </Card> 
                        

                    </div>
                    )
            })}

        </div>

    </Fragment>
);
};
export default ListaDeProductos;


/* , agregar CSS, solucionar que este uno encima de otro */