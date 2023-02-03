import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Nav from './Nav';
const Products = () => {
    const {catId} = useParams();
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const FetchAllProd = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/products/${catId}`)
                setproducts(res.data)
                
            } catch (err) {
                console.log(err);
            }
        }
        FetchAllProd();
    }, []);

    return (
        <div>
            <Nav/>
            <h1>All Products in Category {catId}</h1>
            <div className='Products'>
                {products.map(product => (
                    <div className="Product" key={product.ProductId}>
                        {product.img && <img src="" alt="" />}
                        <h2>{product.ProductId}</h2>
                        <h2>{product.ProductName}</h2>
                        <h2>{product.Desc}</h2>
                        <h2>{product.Cost}</h2>
                        <Link to = {`../product/${product.ProductId}`}>Explore</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;