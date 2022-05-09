        import React, { Fragment } from "react";
        import { Link } from "react-router-dom";
        import ItemCount from "../ItemCount/ItemCount";
        //IMPORT MUI
        import Card from "@mui/material/Card";
        import CardHeader from "@mui/material/CardHeader";
        import CardMedia from "@mui/material/CardMedia";
        import CardContent from "@mui/material/CardContent";
        import Typography from "@mui/material/Typography";
        /* Import css */
        import "./ItemList.css"
        /* Import Media */

        function ItemList(props) {
        /* Como pasar props */
        const item = props.items;

        return (
        <Fragment>
        {/* Lista */}
        <div className="divUno">
        {item.map((catalogo) => {
        const { price, title, id, stock, image } = catalogo;
        return (
        <div className="divMain" key={id}>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={title} />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        <CardMedia
        className="imagen"
        component="img"
        image={image}
        alt="imagen"
        />
        Stock Disponible: {stock}
        </Typography>
        <span className="price">${price}</span>
        </CardContent>
        <div className="divDetail">
        <Link to={`/detalle/${id}`} className="detailProduct">
        {" "}
        <span className="span">Ver Detalle</span>{" "}
        </Link>
        </div>
        <div>
        <ItemCount stock={stock} catalogo={catalogo} initial={0} />
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
