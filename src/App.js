import './App.css';
import Header from './Header';
// import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import Sidebar from './Sidebar';
import Recommend from './Recommend';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return ( 
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route>
          
        </Route>
      </Routes>
     </BrowserRouter>
      <Header /> 
      <div className="side">
        <Sidebar />
        <Recommend />
      </div>
    </div>
  );
}

export default App;
