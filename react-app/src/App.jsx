import "./CommonResource/css/bootstrap.css"; 
//  *** bootstrap installed as npm i react - bootstrap
import "./CommonResource/css/styles.css";

import {Routes, Route} from "react-router-dom"
import Mac from "./Components/Pages/Mac";
// import Iphone from "./Components/Pages/Iphone";
import Ipad from "./Components/Pages/Ipad";
import Watch from "./Components/Pages/Watch";
import Tv from "./Components/Pages/Tv";
import Music from "./Components/Pages/Music";
import Support from "./Components/Pages/Support";
import Search from "./Components/Pages/Search";
import Cart from "./Components/Pages/Cart";
import Home from "./Components/Pages/Home";
import ProductPage from "./Components/ProductPage";
import Four04 from "./Components/Pages/Four04";
import SharedLayout from "./Components/SharedLayout";
import Iphone from "./Components/Iphone";






function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/products" element={<Iphone />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/Tv" element={<Tv />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
