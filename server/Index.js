import express from "express"
import mysql from "mysql"
import cors from "cors"
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


app.listen(5000,()=>{
    console.log("Connected to backend");
});