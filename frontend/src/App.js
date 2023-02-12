import {BrowserRouter as Router ,Routes, Route , Switch} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Mycart from "./pages/Mycart";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import 'react-slideshow-image/dist/styles.css'
import Admin from "./pages/Admin";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Signin/>}/>
          <Route path = ":custid/categories" element={<Categories/>}/>
          <Route path = ":custid/products/:catId" element={<Products/>}/>
          <Route path = ":custid/product/:ProductId" element = {<Product/>}/>
          <Route path = "/register" element={<Register/>}/>
          <Route path = "/signin" element ={<Signin/>}/>
          <Route path = ":custid/Cart" element ={<Mycart/>}/>
          <Route path="/:userid/admin" element = {<Admin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
