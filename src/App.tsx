

import './App.css'
import BenefitSection from './components/home/BenefitSection';
import FAQSection from './components/home/FAQSection';
import MainBanner from './components/home/MainBanner';
import NavigateSection from './components/home/NavigateSection';
import TestimonialSection from './components/home/TestimonialSection';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

function App() {
  return (<>
      <Header/>
      <MainBanner/>
      <BenefitSection/>
      <TestimonialSection/>
      <FAQSection/>
      <NavigateSection/>
      <Footer/>
  </>);
}

export default App;
