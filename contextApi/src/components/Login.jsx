import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleSubmit = function (e) {
    e.preventDefault();
    setUser({username, password});
  };

  return (
    <div className="bg-gray-600 text-white text-2xl text-center pb-6">
      <h2 className="text-5xl py-5 pt-3">Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" text-black mx-2 py-2 px-4 rounded-md"
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-black mx-2 py-2 px-4 rounded-md"
      />
      <button className="ml-1 bg-white p-2.5 text-black font-medium rounded-md hover:rounded-lg hover:bg-black hover:text-white duration-200" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
