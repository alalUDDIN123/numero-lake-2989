import "./App.css";
import AllRoutes from "./Componets/AllRoutes";
import { AuthTesting } from "./Pages/AuthTesting";
import { ProductDetails } from "./Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
      <ProductDetails />
    </div>
  );
}

export default App;
