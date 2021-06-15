import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div>
      <div className="content-wrapper">
        <Header />
        <Landing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
