import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/screens/Home'
import Analytics from './components/screens/Analytics'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/analytics'>
            <Analytics/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
