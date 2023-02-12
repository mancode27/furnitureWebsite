import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import Adder from './Adder';
import Nav from './Nav'

const Wrapper = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
  padding-bottom: 40px;
  border: 2px solid black;
`
const Imagee = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Mycart = () => {
  const { custid } = useParams();
  const [products, setproducts] = useState([]);
  const [totalcost , settotcost] = useState([]);

  useEffect(() => {
    const FetchAllProd = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/Cart/${custid}`)
        setproducts(res.data)

          const ress = await axios.get(`http://localhost:5000/Cart/${custid}/1`)
          console.log(ress.data[0])
          settotcost(ress.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchAllProd();
  }, []);

  const handleevent = () =>{
    // location = "/louda"
  }

  
  
  return (
    <>
    <Nav id={custid} />
    <div>
      {products.map(product => (
        <Wrapper>
          <Imagee>
          <img src={`${product.Img}`}></img>
          </Imagee>
          <Content>
          <h3>{product.ProductId}</h3>
          <div>{product.ProductName}</div>
          <div>{product.cost}</div>
          <div>{product.Dimensions}</div>
          <div> {product.Cost*product.Quantity}</div>
          <Adder quantity = {product.Quantity} ProductId = {product.ProductId} userid = {custid} setproducts = {setproducts} setcost = {settotcost}/>
          
          </Content>
        </Wrapper>
      ))}
    </div>
    <div>
        <button onClick={handleevent}>Confirm Order</button>
        {totalcost.map(cost =>(
          <div>{cost.totcost}</div>
        ))}
    </div>
    </>
  )
}

export default Mycart