import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer
        theme="light"
        position="top-right"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnHover={false}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
