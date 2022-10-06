import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.svg"
import Input from './Input'

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
            Dwarf <span>Coders</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
        <button>Sign Up</button>

      </Form>
      <div>
        <Terms>
            By signup, I agree to the Privacy Policy <br/> and Terms of Service 
        </Terms>
        <h4>Already have an account? <span>Sign In</span></h4>
      </div>
    </Container>
  )
}

const Terms = styled.p`
padding: 0 1rem;
text-align: center;
font-size: 11px;
color: #808080;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
h3 {
    color: #666666;
    margin-bottom: 2rem;
}

button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    border-radius: 8px;
    box-sizing: 0px 14px 9px -15px rgba(0,0,0,0.25);
    background-color: #70EDB9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &hover {
      transform: translateY(-3px);
}

}
`;

const LogoWrapper = styled.div`
img{
    height: 6rem;
}
h3 {
    text-align: center;
    color: #ff8d8d;
    font-size: 28px;
}

span {
    color: #5dc399;
    font-weight: 300;
    font-size: 28px;
    
}
`

const Container = styled.div`
min-width: 400px;
backdrop-filter: blur(38px);
background-color: rgb(255,255,255,0.8);
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
padding: 0 2rem;

@media (max-width: 900) {
    width:100vw;
    position: absolute;
    padding: 0;
}

h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
        color: #ff8d8d;
        cursor: pointer;
    }
}
`

export default Sidebar
