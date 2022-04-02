import React,{Fragment} from 'react';
import Item from './Item'
//IMPORT MUI
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
/* Import Componentes */
import ContadorItem from './ItemCount';
/* Import Media */

function ItemList(items){

    console.log(typeof items)
  {setTimeout(()=>{
    console.log(items)

  }, 3000)}  
return (
    <Fragment>

        <div>{/* Lista */}
            {items.map((producto) =>{
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
)
};

export default ItemList