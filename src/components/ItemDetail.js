import React, {Fragment} from 'react';

/* Import MUI */
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function ItemDetail(data){
    console.log(data.data)
    const {image, title, stock, price} = data.data
    
    return (
        <Fragment>
            {/* Ejemplo de Prueba */}
            <div>

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
                        

            </div>
        </Fragment>
    )
}

/* ESTO TIENE EL JSX  */

export default ItemDetail;