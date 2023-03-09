import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Homepage from './Components/Homepage';
import FooterComponent from './Components/FooterComponent';
import {NavbarWithNavigate} from './Components/Navbar'
    function App (){
      return (
        <div className = 'container'>
          <Router>
          <NavbarWithNavigate/>
              <div  >
                <Routes>
                    <Route path='/' exact element = {<Homepage/>} ></Route>
                </Routes>
              </div>
            <FooterComponent/>
          </Router>
        </div>
      );
    }


export default App;
