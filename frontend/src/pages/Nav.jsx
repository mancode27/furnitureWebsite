import React from 'react'
import styled from 'styled-components'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Container = styled.div`
  height: 60px;
  background-color: black;
`

const Wrapper  = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content:space-between ;
  color: antiquewhite;
`
const Left = styled.div`
  flex:1;
`
const Middle = styled.div`
  flex:1;
`
const Right = styled.div`
  flex:1;
`

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Middle>Middle</Middle>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

export default Nav;