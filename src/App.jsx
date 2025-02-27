import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import PrevFooter from './components/PrevFooter'
import PricingFull from './components/PricingFull'
import Contactus from "./components/Contactus";
import Service from "./components/Servicepage";
import Transformation from "./components/TransformationPage";
import Blog from "./components/Blog";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
    <Router>
    <ScrollToTop />
         <Header />
         <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/pricing" element={<PricingFull />}/>
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/service" element={<Service />} />
            <Route path="/transformation" element={<Transformation />} />
            <Route path="/blog" element={<Blog />} />
         </Routes>
          <PrevFooter />
          <Footer />
    </Router>
     
    </>
  )
}

export default App
