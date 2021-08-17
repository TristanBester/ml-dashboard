import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Topbar />
      <div className="Container">
        <div className="SidebarContainer">
          <Sidebar />
        </div>
        <Switch>
          <Route exact path='/dashboard'>
            <Home />
          </Route>
          <Route path='/other'>
            <div>Other page</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
