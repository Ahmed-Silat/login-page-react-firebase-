import { useState } from "react";
import { login } from "../../config/firebase";
import Signup from "../signUp/signUp";

function Signin(props) {
  const [userInfo, setUserInfo] = useState({});
  const [signup, setSignup] = useState(false);

  const goToSignup = () => {
    setSignup(true);
  };

  const signin = () => {
    const { email, password } = userInfo;

    login(email, password);
    props.change();
  };

  const updateForm = (e, key) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  return (
    <div>
      {signup ? (
        <Signup />
      ) : (
        <div style={{ background: "gray", height: 300, width: 300 }}>
          <h1>Login</h1>

          {/* <input onChange={(e) => updateForm(e, "name")} placeholder="First Name" /> */}
          <input
            type={"email"}
            onChange={(e) => updateForm(e, "email")}
            placeholder="Email"
          />
          <input
            type={"password"}
            onChange={(e) => updateForm(e, "password")}
            placeholder="Password"
          />
          <br />
          <button onClick={signin}>Login</button>
          <button onClick={goToSignup}>Go To Signup</button>
        </div>
      )}
    </div>
  );
}
export default Signin;
