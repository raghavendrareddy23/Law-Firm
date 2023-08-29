import React from "react";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Attorneys from "./components/Attorneys/Attorneys";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <Intro />
      <Attorneys />
    </div>
  );
}

export default App;
