import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Four0Four from "./Pages/Four0Four";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paintings" element={<Index />} />
            <Route path="/paintings/new" element={<New /> } />
            <Route path="/paintings/:id" element={<Show /> } />
            <Route path="/paintings/:id/edit" element={<Edit /> } />
            <Route path="*" element={<Four0Four /> } />
          </Routes>
        </main>
      </Router>
      
    </div>
  );
}

export default App;
