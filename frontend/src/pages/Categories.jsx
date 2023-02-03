import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import Nav from './Nav';
const Categories = () => {

    const [catagories,setCat] = useState([]);
    useEffect(()=>{
        const fetchAllCat = async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/categories");
                setCat(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllCat();
    },[])


  return (
    <div>
        <Nav/>
        <h1>All Categories Available</h1>
        <div className='categories'>
            {catagories.map(category=>(
                <div className="category" key = {category.CategoryId}>
                    {category.img && <img src="" alt="" />}
                    <h1>{category.CategoryId}</h1>
                    <h2>{category.CategoryName}</h2>
                    <Link to = {`../products/${category.CategoryId}`}>lets Go</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories;