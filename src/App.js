import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.less";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import ForgetPassword from "./Pages/ForgetPassword";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/resetpwd">
          <ForgetPassword />
        </Route>
      </Router>
    </div>
  );
}

export default App;
