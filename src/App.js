import React from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Food from "./components/Food";
import Hero from "./components/Hero";
import HeadlineCards from "./components/Headeline";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
