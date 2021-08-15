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
        <Home />
      </div>
    </Router>
  );
}

export default App;
