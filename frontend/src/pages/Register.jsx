import React, { Component } from 'react'
import styled from 'styled-components';

const Form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before{
        content: "";
        background-image : url("https://media1.popsugar-assets.com/files/thumbor/7iK3ZLZjbTvd52oM1ebPublR0so/0x545:5594x3482/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-/2021/11/05/224/n/1922794/2610586a61860340d11777.37964727_.jpg");
        background-repeat: no-repeat;
        /* background-position: 50% 0; */
        position: absolute;
        background-size: cover;
        top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
        opacity: 0.4;
    }
`

const Inner = styled.div`
    position: relative;
    font-weight: bolder;
    font-size:20px;
`

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname : "",
            lname : "",
            email : "", 
            password : "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const {fname, lname, email, password} = this.state;
        console.log(fname, lname, email, password);
        fetch("http://localhost:3001/register", {
            method : "POST",
            crossDomain : true,
            headers : {
                "Content-Type" : "application/json",
                Accept: "application/json", 
                "Access-Control-Allow-Origin" : "*",           
            },
            body : JSON.stringify({
                fname,
                email, 
                lname, 
                password,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister")
        })
    }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3 style={{position:'relative',backgroundColor:"black",color:"white", padding:"10px 10px"}}>Sign Up</h3>

        <Inner className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            style={{border:"1.5px solid black"}}
            onChange={(e) => this.setState({fname : e.target.value})}
          />
        </Inner>

        <Inner className="mb-3">
          <label>Last name</label>
          <input style={{border:"1.5px solid black"}} type="text" className="form-control" placeholder="Last name" 
          onChange={(e) => this.setState({lname : e.target.value})}/>
        </Inner>

        <Inner className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({email : e.target.value})}
            style={{border:"1.5px solid black"}}
          />
        </Inner>

        <Inner className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({password : e.target.value})}
            style={{border:"1.5px solid black"}}
          />
        </Inner>

        <Inner className="d-grid">
          <button type="submit" className="btn btn-primary">
            <a style={{position:"relative" , textDecoration:"none" ,color:"black"}} href="/signin"> Sign Up </a>
          </button>
        </Inner>
        <p style={{position:"relative" , fontWeight:"bold" ,color:"black"}} className="forgot-password text-right">
          Already registered <a style={{position:"relative" , textDecoration:"none"}} href="/signin">sign in?</a>
        </p>
      </Form>
    )
  }
}