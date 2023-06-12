import './App.scss';
import AboutUs from './components/Home/AboutUs';
import ContactUs from './components/Home/ContactUs';
import Features from './components/Home/Features';
import HeroSection from './components/Home/HeroSection';
import HomeCategories from './components/Home/HomeCategories';
import HomeProducts from './components/Home/HomeProducts';
import Header from './components/utils/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <HeroSection/>
    <AboutUs />
    <Features/>
    <HomeCategories/>
    <HomeProducts/>
    <ContactUs/>
    </div>
  );
}

export default App;
