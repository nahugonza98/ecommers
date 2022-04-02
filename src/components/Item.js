import React, {Fragment, useState, useEffect} from "react";
import ItemList from './ItemList'
/* Import MUI */
const Item = () => {
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



console.log(typeof productos)


return (
    <Fragment>
        <ItemList items={productos}/>
    </Fragment>
);
};
export default Item;


/* , agregar CSS, solucionar que este uno encima de otro */