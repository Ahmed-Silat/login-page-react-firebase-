import logo from "./logo.svg";
import "./App.css";
import Signup from "./views/signUp/signUp";
import Signin from "./views/signIn/signIn";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(false);
  const togglePage = () => {
    setPage(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        {page ? <Signin /> : <Signup login={togglePage} />}
        {/* <Signup />
        <Signin /> */}
      </header>
    </div>
  );
}

export default App;
