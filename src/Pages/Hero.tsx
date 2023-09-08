import react, { useEffect, useState } from "react"
import styled from "styled-components"
import pix from "../DribbleImages/adobe_logo-removebg-preview.png"
import pix1 from "../DribbleImages/microsoft_logo-removebg-preview.png"
import pix2 from "../DribbleImages/facebook_logo-removebg-preview.png"
import pix3 from "../DribbleImages/shopify_logo-removebg-preview.png"
import pix4 from "../DribbleImages/disney_logo-removebg-preview.png"
import pix5 from "../DribbleImages/amazon_logo-removebg-preview.png"
import pix6 from "../DribbleImages/lyft_logo-removebg-preview.png"


interface iData{
  text:string
}
const Hero = () =>{

  const [time, setTime] = useState(true)
  const changeTime = ()=>{
    const dTime = window.pageYOffset
    if(dTime >= 50){
      setTime(true)
    }else{
      setTime(false)
    }
  }
  window.addEventListener("scroll", changeTime)
  
  const [scroll, setScroll] = useState(true)
  const scrollChange = ()=>{
    const dScroll = window.pageYOffset
    if(scroll && dScroll >= 300){
      setScroll(true)
    }else if(scroll && dScroll <= 70){
      setScroll(false)
    }
  }

  const scroller = ()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  }

  window.addEventListener("scroll", scrollChange)

  const [count, setCount]=useState(0)
  const [date, setDate]=useState<Array<iData>>([
    {text:"Over 3 million ready-to-work creatives in our community"}
  ])

   const getRand = () =>{
    return `#${(((1<<25)*Math.random()) |0).toString(16)}`
   }

  useEffect(()=>{
    setInterval(()=>{
      setCount((el:number)=>{
        return el + 1
      })
    }, 1000)
  },[]) 
  
  return(
    <div>
      <Container>
       <Wrapper>
        <p style={{ padding:"5px 5px", backgroundColor:`${getRand()}`, color:"white", borderRadius:"18px",fontSize:"18px"}}>{date[count%date.length].text}</p>

        <span style={{fontSize:"70px",textAlign:"center"}}>Hire The Worlds Top's <br/>Creative Talent</span>

        <p style={{fontSize:"22px"}}>Connect with a community of millions of top-rated designers & agencies around the world.</p>
        <Forth>Start Hiring Today</Forth>
       </Wrapper>
       {time?(<TopArrow onClick={scroller} bg="blue" po="fixed"></TopArrow>)
       : (<TopArrow onClick={scroller} bg="transparent" po="sticky"></TopArrow>)}
      </Container>
      <Container2>
         <Box>1</Box> 
         <Box>2</Box>  
         <Box>3</Box>  
         <Box>4</Box>  
      </Container2>
      <Logos>
        <p style={{fontWeight:"bold", marginLeft:"50px"}}>TRUSTED BY</p>
        <Pics src = {pix} style={{objectFit:"cover" ,width:"120px"}}></Pics>
        <Pics src = {pix1} style={{objectFit:"cover" ,width:"150px"}}></Pics>
        <Pics src = {pix2} style={{objectFit:"cover" ,width:"120px"}}></Pics>
        <Pics src = {pix3} style={{objectFit:"cover" ,width:"130px"}}></Pics>
        <Pics src = {pix4} style={{objectFit:"cover" ,width:"90px"}}></Pics>
        <Pics src = {pix5} style={{objectFit:"cover" ,width:"140px", backgroundColor:"#EDF0F2"}}></Pics>
        <Pics src = {pix6} style={{objectFit:"cover" ,width:"50px", marginRight:"40px"}}></Pics>
      </Logos> 
      <BelowHero>
        <TextDiv>
          <Left>When only<br/>the best<br/>Talent will do</Left>
          <Right>
            <p>
          From Ford to Airbnb to Capital One, see why over 60,000 leading<br/>
          brands and business builders use Dribbble to attract, engage,<br/>
          and hire their best design talent.</p>
          <Botton>Get Started</Botton>
          </Right>
        </TextDiv>
      </BelowHero> 
      <div style = {{height:"1px", backgroundColor:"gray",width:"92%", marginLeft:"60px"}}></div>
      <Wrapper2>
       <p style={{ padding:"5px 5px", backgroundColor:"red", color:"white", borderRadius:"18px",fontSize:"18px"}}>Trusted by top brands & businesses</p>

       <span style={{fontSize:"57px",textAlign:"center"}}>Connecting Brands And<br/> Business Builders With The<br/> World's Top Designers</span>

       <p style={{fontSize:"22px"}}>The world's leading brands use Dribbble to hire creative talent. Browse millions of top-rated<br/> portfolios to find your perfect creative match.</p>
      </Wrapper2>
      <BelowHero2>
       <LeftRightHolder>
        <LeftTxt>
          <span style={{fontSize:"50px"}}>Find your perfect creative match</span><br/>
          <span style={{fontSize:"19px"}}>As the world's largest and most far-reaching network of exceptional creative<br/> professionals, we are fully equipped to handle your most critical projects<br/> with ease.</span>
          <Bottons>
            <button style={{padding:"18px 18px", fontSize:"15px", color:"white", backgroundColor:"black", fontWeight:"bold", margin:"5px", borderRadius:"25px"}}>Find a designer</button>
            <button style={{padding:"18px 18px", fontSize:"15px", border:"0.5px solid silver", margin:"5px", borderRadius:"25px"}}>Learn about hiring</button>
          </Bottons>
        </LeftTxt>
        <RightTxt></RightTxt>
       </LeftRightHolder> 
      </BelowHero2>
    </div>
  )
}

export default Hero;
const Bottons = styled.div`
height:90px;
width:350px;
display:flex;
justify-content:space-between;
align-items:center;
`
const LeftRightHolder = styled.div`
height:500px;
width:92%;
display:flex;
justify-content:space-between;
align-items:center
`
const RightTxt = styled.div`
height:570px;
width:570px;
background-color:red;
border-radius:50%;
`
const LeftTxt = styled.div`
height:400px;
width:670px;
`
const BelowHero2 = styled.div`
height:700px;
width:100%;
display:flex;
justify-content:center;
align-items:center
`
const Wrapper2 = styled.div`
height:500px;
width:100%;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
text-align:center
`
const Botton = styled.div`
width:85px;
padding:14px 14px;
color:white;
background-color:black;
font-size:15px;
font-weight:bold;
border-radius:31px;
`
const Right = styled.div`
height:220px;
width:630px;
line-height:2rem;
font-size:22px;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-bottom:95px
`
const Left = styled.div`
font-size:80px;
`
const TextDiv = styled.div`
width:93%;
height:390px;
display:flex;
justify-content:space-between;
align-items:center;
`
const BelowHero = styled.div`
height:600px;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`
const Pics = styled.img``
const Logos = styled.div`
height:40px;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
`
const Box = styled.div`
height:330px;
width:21%;
background-color:gray;
border-radius:20px;
`
const Container2 = styled.div`
height:350px;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
`
const Forth = styled.div`
padding:20px 20px;
background-color:black;
color:white;
border-radius:30px;
`
const TopArrow = styled.div<{bg:string, po:string}>`
height:70px;
width:70px;
background-color:${({bg})=>bg};
position:${({po})=>po};
right:15px;
bottom:15px;
`
const Wrapper = styled.div `
height:400px;
width:950px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
`
const Container = styled.div`
height:520px;
width:100%;
display:flex;
align-items:center;
justify-content:center;
position:relative;
`