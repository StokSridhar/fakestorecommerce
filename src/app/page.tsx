 
import Promosection from "./components/promosection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import TopNotification from "./components/TopNotification";
import Features from "./components/Features";

export default function Home() { 
  
  return (
    <main> 
      <TopNotification/>
      <Navbar/>
      <Promosection/> 
      <Features/>
      <Testimonial/>
      <Newsletter/>
    <Footer/>
      </main>
  );
}
