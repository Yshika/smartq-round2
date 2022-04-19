import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Kitchen from "./components/Kitchen";
import menu from "./shared/menu";

function App() {
  return (
    <div>
      <Header />
      <Kitchen menu={menu} />
      <Footer />
    </div>
  );
}

export default App;
