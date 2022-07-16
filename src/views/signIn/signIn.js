import { useState } from "react";
import { login } from "../../config/firebase";

function Signin(props) {
  const [userInfo, setUserInfo] = useState({});

  const signin = () => {
    const { email, password } = userInfo;

    login(email, password);
    props.change();
  };

  const updateForm = (e, key) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  return (
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
      {/* <button onClick={signup}>Register</button> */}
      <button onClick={signin}>Login</button>
    </div>
  );
}
export default Signin;
