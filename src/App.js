import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import PageNotFound from './components/PageNotFound';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productListing" element={<ProductListing/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/productListing/product/:_id" element={<ProductDetail/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
