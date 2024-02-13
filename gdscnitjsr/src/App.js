
import './App.css';
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Events from "./pages/Events"
import {Addmembers} from "./pages/Addmembers"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/signup' element = { <Signup />}></Route>
          <Route exact path='/login' element = { <Login />}></Route>
          <Route exact path='/addevents' element = { <Events />}></Route>
          <Route exact path='/addmember' element = { <Addmembers />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
