import logo from "./logo.svg";
import "./App.css";
import Signup from "./views/signUp/signUp";
import Signin from "./views/signIn/signIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Signup />
        <Signin />
      </header>
    </div>
  );
}

export default App;
