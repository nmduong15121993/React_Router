import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");

  const onHandleLogin = async () => {
    if(username === "admin" && password === "123456") {
      localStorage.setItem("checkLogin", "isLogined");
      history.replace("/admin");
    } else {
      setMsgError("Bạn đã nhập sai username & password");
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <label>PassWord: </label>
          <input
            type="password"
            name="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div style={{color: "red"}}> {msgError} </div>
        <div>
          <button type="button" onClick={onHandleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export { Login };
