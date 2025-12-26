
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("LOGIN DATA:", email, password); // debug

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login success");
      window.location.href = "/profile";
    } catch (err) {
      // 👇 THIS LINE WILL TELL THE TRUTH
      console.log('Error',err);
      
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login page</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;