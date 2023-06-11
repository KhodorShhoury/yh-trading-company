import './App.scss';
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
    <Features/>
    <HomeCategories/>
    <HomeProducts/>
    </div>
  );
}

export default App;
