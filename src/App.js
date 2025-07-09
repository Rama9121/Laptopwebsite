import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BuyLaptop from './Pages/BuyLaptop';
import SellLaptop from './Pages/SellLaptop';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Header from './Layouts/header';
// Import your other pages here...

function App() {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />   
         <Route path="/home" element={<Home />} />
      {/* ✅ This handles "/" */}
        <Route path="/buy-laptop" element={<BuyLaptop />} />
        <Route path="/sell-laptop" element={<SellLaptop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
