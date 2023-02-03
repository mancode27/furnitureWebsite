import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Nav from './Nav';

const Product = () => {
    const { ProductId } = useParams();
    const [product, setprod] = useState([]);
    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const res = await axios.get("http://localhost:5000/product/" + ProductId);
                setprod(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        FetchProduct();
    }, []);
    return (
        <div>
            <Nav />
            <div>
                {product.map(prod => (
                    <div className="product" key={prod.ProductId}>
                        <h1>Your Choose product is {prod.ProductName}</h1>
                        <h2>{prod.Desc}</h2>
                        <h2>{prod.Cost}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product