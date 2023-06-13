import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import AboutUs from './components/Home/AboutUs';
import ContactUs from './components/Home/ContactUs';
import Features from './components/Home/Features';
import HeroSection from './components/Home/HeroSection';
import HomeCategories from './components/Home/HomeCategories';
import HomeProducts from './components/Home/HomeProducts';
import Header from './components/utils/Header';
import { useEffect } from 'react';
import { getAllCategories } from './redux/actions/categoriesAction';
import AllCategoriesPage from './pages/Categories/AllCategoriesPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/Products/AllProductsPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Header />
      <Routes>
        <Route index element = {<HomePage/>}/>
        <Route path="/categories" element={<AllCategoriesPage />}/>
        <Route path="/products" element={<AllProductsPage />}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
