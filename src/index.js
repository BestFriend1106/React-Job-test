import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./app/components/Main";
import Collection from "./app/components/Collection";
import Category from "./app/components/Category";

let persistor = persistStore(store);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Main />
          <Routes>
            <Route path="/Categories" element={<Category />} />
            <Route path="/Collections" element={<Collection />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
