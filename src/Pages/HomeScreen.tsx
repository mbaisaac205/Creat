import styled from "styled-components"
import Contact from "./Contact";
import Features from "./Features";
import About from "./About";
import Hero from "./Hero";

const HomeScreen = () =>{
  return(
    <div>
      <Hero/>  
      <About/>
      <Contact/>
      <Features/>
    </div>
  )
}

export default HomeScreen;