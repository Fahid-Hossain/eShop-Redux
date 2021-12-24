import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import PageNotFound from './components/PageNotFound';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/productListing" element={<ProductListing/>} />
        <Route path="/productListing/product/:id" element={<ProductDetail/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
