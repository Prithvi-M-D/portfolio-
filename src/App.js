import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Main from "./pages";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import { Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
