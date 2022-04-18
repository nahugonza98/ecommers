import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Container from '@mui/material/Container'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
const homePage = ()=> {
    
    return (
        <Container className='container-general'>
            
            <ItemListContainer />

        </Container>
    )
}

export default homePage