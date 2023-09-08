import react, { useState } from "react"
import { styled } from "styled-components";
const Header=()=>{
     
  const [state, setState] = useState(false)

  const headerChange= () =>{
    const scroll = window.pageYOffset

    if(scroll >= 300){
      setState(true)
    }else{
      setState(false)
    }
  }

  window.addEventListener("scroll", headerChange)
    return(
      <div>
      {state?(    
      <Container bg="white" po="fixed">
        <NavLogo>
          <LogN>
            <Logo cl="black">
              Dribble
            </Logo>
            <Navs>
             <Nav cl="black">Find talent</Nav>
             <Nav cl="black">For designers</Nav>
             <Nav cl="black">Inspiration</Nav>
             <Nav cl="black">Learn design</Nav>
             <Nav cl="black">Go pro</Nav>
            </Navs>
          </LogN> 
          <SignLog>
           <Login cl="black">Log in</Login>
           <Signin bg="black" cl="white">Sign in</Signin>
          </SignLog>
        </NavLogo>  
      </Container> 
      ):(          
        <Container bg="black" po="sticky">
        <NavLogo>
          <LogN>
          <Logo cl="white">
              Dribble
              </Logo>
            <Navs>
             <Nav cl="white">Find talent</Nav>
             <Nav cl="white">For designers</Nav>
             <Nav cl="white">Inspiration</Nav>
             <Nav cl="white">Learn design</Nav>
             <Nav cl="white">Go pro</Nav>
            </Navs>
          </LogN> 
          <SignLog>
          <Login cl="white">Log in</Login>
          <Signin bg="white" cl="black">Sign in</Signin>
          </SignLog>
          </NavLogo>  
          </Container> 
          )}
     </div>
    )
}
export default Header;
const Signin = styled.div <{bg:string, cl:string}>`
width:48%;
padding:8px 18px;
background-color:${({bg})=>bg};
color:${({cl})=>cl};
display:flex;
align-items:center;
justify-content:center;
border-radius:20px;
`
const Login = styled.div<{cl:string}>`
width:48%;
display:flex;
align-items:center;
color:${({cl})=>cl}
`
const SignLog = styled.div`
height:40px;
width:150px;
display:flex;
justify-content:center;
align-item:center;
font-size:14.5px;
`
const Nav = styled.div <{cl?: string}>`
color: ${({cl})=>cl};
`
const Navs = styled.div`
width:80%;
display:flex;
justify-content:space-between;
align-item:center;
font-size:14.5px;
`
const Logo = styled.div<{cl:string}>`
padding-left:10px;
padding-left:10px;
display:flex;
justify-content:center;
align-item:center;
font-size:25px;
color:${({cl})=>cl}
`
const LogN = styled.div`
width:50%;
display:flex;
justify-content:space-between;
align-items:center;
`
const NavLogo = styled.div`
height:100%;
width:94%;
display:flex;
align-items:center;
justify-content:space-between;
`
const Container = styled.div <{po?: string, bg?:string}>`
height:90px;
width:100%;
display:flex;
justify-content:center;
position: ${({po})=>po};
background-color: ${({bg})=>bg};
transition: all ease-in-out 350ms
`