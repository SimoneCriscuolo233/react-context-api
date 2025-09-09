import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './layout/Layout';
import { BudgetProvider } from './contexts/BudgetContext';
function App() {


  return (
    <BrowserRouter>
      <BudgetProvider>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" >
              <Route index element={<Products />} />
              <Route path='/products/:id' element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </BudgetProvider>
    </BrowserRouter>
  )
}
export default App