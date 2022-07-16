import Navbar from "./components/navbar/Navbar";
import './app.css'
import Banner from "./components/banner/Banner";
import RowPost from "./components/rowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost/>
      <RowPost />
      <RowPost />
    </div>
  );
}

export default App;
