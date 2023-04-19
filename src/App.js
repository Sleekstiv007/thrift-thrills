import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Clothes from "./components/Clothes";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Clothes />
      <Category />
    </div>
  );
}

export default App;
