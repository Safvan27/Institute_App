import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.less";
import "antd/dist/antd.css";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Notifications from "./Pages/Notifications/Notifications";
import University from "./Pages/University/University";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/university">
          <University />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
      </Router>
    </div>
  );
}

export default App;
