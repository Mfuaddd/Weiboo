import "./App.scss";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Offers from "./Components/Offers";
import Products from "./Components/Products";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Services/>
      <Products/>
      <Offers/>
    </>
  );
}

export default App;
