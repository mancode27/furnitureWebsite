import {BrowserRouter as Router ,Routes, Route , Switch} from "react-router-dom"
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/categories" element={<Categories/>}/>
          <Route path = "/products/:catId" element={<Products/>}/>
          <Route path = "/product/:ProductId" element = {<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
