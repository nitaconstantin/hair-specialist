import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import HsTestimonials from "./hsTestimonials/HsTestimonials";
import HsPricingPlan from "./hsPricingPlan/HsPricingPlan";
import HsSellingProduct from "./hsSellingProduct/HsSellingProduct";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <HsTestimonials />
      <HsPricingPlan />
      <HsSellingProduct />
      <Footer />
    </>
  );
}

export default App;
