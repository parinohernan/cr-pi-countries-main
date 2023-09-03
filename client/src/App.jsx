//import { useState } from "react";
import { LandingPage, Home, Form, Details } from "./views";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import About from "./views/About/About";

function App() {
  const location = useLocation();

  return (
    <div className="ppal">
      {/* <img
        src="/images/fondo-app.jpg"
        alt="Background"
        className="background-image"
      /> */}
      <Provider store={store}>
        {location.pathname !== "/" && <NavBar />}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
