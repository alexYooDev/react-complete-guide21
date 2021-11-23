import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

//AuthContextProvider로 App component를 감싸 App.js에서 로직을 제거, 컨텍스트 파일에서 관리하게 한다.
ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
