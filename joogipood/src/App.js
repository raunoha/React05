import { Link, Route, Routes} from "react-router-dom";
import './App.css';
import Avaleht from "./pages/Avaleht";
import LisaJook from "./pages/LisaJook";
import HaldaJooke from "./pages/HaldaJooke";

function App() {
  return (
    <div>
      <Link to="/">
    <button className="nupp">Avalehele</button>
    </Link>
    <Link to="/halda">
    <button className="nupp">Jooke halda</button>
    </Link>
    <Link to="/lisa">
    <button className="nupp">Jooke Lisama</button>
    </Link>
    
    <Routes>
    <Route path="/" element = { <Avaleht/> }/>
    <Route path="/halda" element = { <HaldaJooke/> }/>
    <Route path="/lisa" element = { <LisaJook/> }/>
    
    </Routes>
    </div>
  );
}

export default App;
