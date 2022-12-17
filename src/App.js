import "./App.css";
import AllRoutes from "./Componets/AllRoutes";
import { AuthTesting } from "./Pages/AuthTesting";
import { ProductDetails } from "./Pages/ProductDetails";
import Navbar from "./Componets/Navbar";
import Footer from "../src/Componets/Footer"
import BacktoTop from "./Componets/BackToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
       <AllRoutes />
     <BacktoTop/>
      <Footer/>
    </div>
  );
}

export default App;
