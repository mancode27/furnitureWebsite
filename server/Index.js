import express from "express"
import mysql from "mysql"
import cors from "cors"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { status } from "init"
dotenv.config()

// import mongoose from "mongoose"
const app = express();
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"furnituresweb"
})


// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
app.use(express.json());
app.use(cors())
app.get("/",function(req,res){
    res.json("Hello From backend");
});

app.get("/categories" , (req,res)=>{
    const q = "Select * from categories"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/categories",(req,res)=>{
    const q = "insert into categories (`CategoryName`,`CategoryId`) values (?)"
    // const values = ["manoj","khabhi bhi","kajs"]
    const values = [
        req.body.CategoryId,
        req.body.CategoryName,
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })

})


app.get("/products/:CatId" , (req,res)=>{
    const catId = req.params.CatId;
    const q = "Select * from product where Category_Id = ?"
    db.query(q,[catId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/product/:ProductId", (req,res)=>{
    const productId = req.params.ProductId;
    const q = "Select * from product where ProductId = ?"
    db.query(q,[productId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/productCat/:ProductId", (req,res)=>{
    const productId = req.params.ProductId;
    const q = "Select * from product where Category_Id in (select Category_Id from product p where p.ProductId = ?) and ProductId != ?"
    db.query(q,[productId,productId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/images/:ProductId",(req,res)=>{
    const productId = req.params.ProductId;
    const q = "select * from images where ProductId = ?"
    db.query(q,[productId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/AddCart",(req,res)=>{
    const data = [
        req.body.userid,
        req.body.ProductId,
        req.body.quantity
    ]
    const q = "insert into cart values(?)"
    db.query(q,[data],(err,data)=>{
        if(err) return res.json(err);
        return res.json({"status":"200"});
    })
})
app.get("/Cart/:userid",(req,res)=>{
    const userid = req.params.userid;
    const q = "Select * from product p , cart c where c.ProductId = p.ProductId and c.CustomerId = ?"
    db.query(q,[userid],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get("/Cart/:userid/1",(req,res)=>{
    const userid = req.params.userid;
    const q = "Select SUM(Cost*Quantity) as totcost from product p , cart c where c.ProductId = p.ProductId and c.CustomerId = ?"
    db.query(q,[userid],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.put("/Cart/:userid",(req,res)=>{
    const userid  = req.params.userid;
    const ProductId = req.body.ProdId;
    const quantity = req.body.quan ;
    const q = "update cart set Quantity = ? where CustomerId = ? and ProductId = ?"
    db.query(q,[quantity,userid,ProductId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })

})

app.listen(5000,()=>{
    console.log("Connected to backend");
});