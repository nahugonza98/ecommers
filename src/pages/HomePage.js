import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import Container from '@mui/material/Container'

const homePage = ()=> {
    
    return (
        <Container className='container-general'>
            
            <ItemListContainer />
        </Container>
    )
}

export default homePage