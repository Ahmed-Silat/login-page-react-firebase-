import logo from "./logo.svg";
import "./App.css";
import Signup from "./views/signUp/signUp";
import Signin from "./views/signIn/signIn";
import { useState } from "react";
import Dashboard from "./views/dashboard/dasboard";

function App() {
  const [screen, setScreen] = useState(false);
  const [page, setPage] = useState(false);

  const togglePage = () => {
    setScreen(true);
  };

  const changeScreen = () => {
    setPage(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {screen ? <Signin /> : <Signup login={togglePage} />}
        {/* {page ? <Dashboard /> : <Signin change={changeScreen} />} */}
        {/* <Signup />
        <Signin /> */}
      </header>
    </div>
  );
}

export default App;
