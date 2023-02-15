import './App.css';
import CourseOutline from './components/CourseOutline/CourseOutline';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import DrawerAppBar from './components/Navbar/Navbar';
import Promo from './components/Promo/Promo';
import Team from './components/Team/Team';

function App() {
  return (
    <>
      <DrawerAppBar/>
      <Hero/>
      <CourseOutline/>
      <Promo/>
      <Team/>
      <Footer/>
    </>
  );
}

export default App;
