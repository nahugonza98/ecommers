import {useContext, useState} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../Context/CartContext';
import "./Cart.css"
import ModalCustom from '../Modal/Modal';
import db from '../../firebaseconfig'
import { addDoc, collection } from 'firebase/firestore';
import {useNavigate} from "react-router-dom"

const CartPage = () => {
    /* Importacion de Hooks */
    const navigate = useNavigate();
    const { cartProducts, deleteProduct, totalPrecio } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)

    /* Data del FORM, seteada */
    const [formData, setFormData] = useState({
        name: '',
        phone: '',  
        email: '',
    })

    /* State de la Order */
    const [order, setOrder] = useState(
        {
            buyer : formData,
            /* Se mapea el Item para que devuelva los obj */
            item: cartProducts.map( (cartProduct) => {
                return{
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price * cartProduct.quantity
                }
            }),
            
            total: totalPrecio,
        }
    )

    /* Apertura del MODAL */
    const addOrder = ()=>{
        setOpenModal(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const [successOrder, setSuccessOrder] = useState()


    /* Guardar Ordenes */
    const pushOrder = async()=>{
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, order)
    }
    /*  Cambios en el form*/
    const handleChange = (e) => {
        const {value, name} = e.target
        setFormData({
            /* [] Lo que haya dentro es un tipo de variable, sino crearia una propiedad nueva */
            ...formData,
            [name] : value
        })
    }




    return(
        <Container className='container-general'> 
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Producto</h2>
                    <h2>Descripcion</h2>
                    <h2>Precio Unitario</h2>
                    <h2>Cantidad</h2>
                    <h2>Quitar</h2>
                </div>
                {cartProducts.map( (cartProduct) => {
                    const { price, image, title, talle, id, quantity } = cartProduct
                    return(
                        <div className='cart-table__content' key={id}>
                            <div className='cart-table__content-img'>
                                <img src={`${image}`} />
                            </div>
                            <div className='cart-table__content-title'>
                                <p>{title}</p>
                                <span>Talle : <b>{talle}</b></span>
                            </div>
                            <div className='cart-table__content-price'>
                                <p>$ {price}</p>
                            </div>
                            <div className='cart-table__content-quantity'>
                                <p>{quantity}</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <button className='btn-delete' onClick={() => deleteProduct(cartProduct)}>
                                    <DeleteIcon/>
                                </button>
                            </div>
                        </div>
                    )
                })}

                <div className='cart-footer'>
                    <Button className='btn-custom' onClick={()=>navigate("/")}>Continuar comprando</Button>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__subtotal'>
                            <p>Subtotal</p>
                            <span>$ {totalPrecio}</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {totalPrecio}</span>
                        </div>
                        <Button className='btn-custom' onClick={addOrder}>Completar Compra</Button>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>

                {successOrder ? (
                    <div>
                        <h3>Orden generada correctamente</h3>
                        <p>Su numero de orden es: {successOrder}</p>
                    </div>
                ) : (
                    <>
                        <h2>Formulario Comprador</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Nombre' 
                        onChange={handleChange} 
                            value={formData.name}
                            />
                            <input type="number" name='phone' placeholder='Telefono' 
                                onChange={handleChange} 
                                value={formData.phone}
                            />
                            <input type="mail" name='email' placeholder='mail' 
                                onChange={handleChange} 
                                value={formData.email}
                            />

                            <Button type="submit">Enviar</Button>
                        </form>
                    </>
                )}

            </ModalCustom>
        </Container>
    )
}

export default CartPage 

/* Vaciar Carrito, y mandar a la home */