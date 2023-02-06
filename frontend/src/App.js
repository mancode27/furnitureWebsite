import {BrowserRouter as Router ,Routes, Route , Switch} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Signin/>}/>
          <Route path = "/categories" element={<Categories/>}/>
          <Route path = "/products/:catId" element={<Products/>}/>
          <Route path = "/product/:ProductId" element = {<Product/>}/>
          <Route path = "/register" element={<Register/>}/>
          <Route path = "/signin" element ={<Signin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
