    import React, { Fragment } from "react";
    import { Link } from "react-router-dom";
    import ItemCount from "../ItemCount/ItemCount";
    //IMPORT MUI
    import Card from "@mui/material/Card";
    import CardHeader from "@mui/material/CardHeader";
    import CardMedia from "@mui/material/CardMedia";
    import CardContent from "@mui/material/CardContent";
    import Typography from "@mui/material/Typography";
    /* Import Componentes */

    /* Import Media */

    function ItemList(props) {
    /* Como pasar props */
    const item = props.items;

    return (
        <Fragment>
        {/* Lista */}
        <div>
            {item.map((catalogo) => {
            const { price, title, id, stock, image } = catalogo;
            return (
                <div key={id}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader title={title} />
                    <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <CardMedia
                        component="img"
                        image={image}
                        height="194"
                        alt="imagen"
                        />
                        Stock Disponible: {stock}
                    </Typography>
                    ${price}
                    </CardContent>
                    <Link to={`/detalle/${id}`}> Detalle del Producto </Link>
                    <div>
                    <ItemCount stock={stock} catalogo={catalogo} />
                    </div>
                </Card>
                </div>
            );
            })}
        </div>
        </Fragment>
    );
    }

    export default ItemList;
