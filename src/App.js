import Navbar from "./components/navbar/Navbar";
import './app.css'
import Banner from "./components/banner/Banner";
import RowPost from "./components/rowPost/RowPost";
import { action,comedy,originals, sci_fi } from "./Url";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' isSmall url={action} small/>
      <RowPost title='Comedy' url={comedy} small/>
      <RowPost title='Sci-fi' url={sci_fi} small />
    </div>
  );
}

export default App;
