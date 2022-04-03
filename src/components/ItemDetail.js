import React, {Fragment} from 'react';

/* Import MUI */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function ItemDetail(data){
    const info = data.data
    const {image, title, stock, price} = info


    return (
        <Fragment>
            {/* Ejemplo de Prueba */}
            /* <div>
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
                        

            </div> */
            <h2>Prueba</h2>
        </Fragment>
    )
}


export default ItemDetail;