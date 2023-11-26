import "./App.scss";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Offers from "./Components/Offers";
import Products from "./Components/Products";
import Services from "./Components/Services";
import Super_Deal from './Components/Super_Deal';
import Best_Category from './Components/Best_Category';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Services/>
      <Products/>
      <Offers/>
      <Super_Deal/>
      <Best_Category/>
      </>
  );
}

export default App;
