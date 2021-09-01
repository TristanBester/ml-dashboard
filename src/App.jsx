import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import FeatureExpansion from './components/FeatureExpansion';



function App() {
  return (
    <Router>
      <Topbar />
      <div className="Container">
        <div className="SidebarContainer">
          <Sidebar />
        </div>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path="/feature/:featureId">
            <FeatureExpansion/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
