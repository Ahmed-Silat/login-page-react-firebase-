import { getAuth, signOut } from "firebase/auth";
function Dashboard() {
  const auth = getAuth();
  function logout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("logged out")
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div style={{ background: "gray", height: 300, width: 300 }}>
      <h1>Dashboard</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
}
export default Dashboard;
