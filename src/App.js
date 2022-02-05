import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Nav from "./layout/Nav";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}
