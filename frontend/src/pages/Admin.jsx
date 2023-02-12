import React, { useState } from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Options =  styled.button`
    flex: 1;
    width: 100vw;
    
`

const Admin = () => {
    
  return (
    <div>
        <Nav/>
        <Wrapper>
            <Options>Add a Category</Options>
            <Options>Add a Product</Options>
            <Options>Display Orders</Options>
        </Wrapper>
    </div>
  )
}

export default Admin