import React, { Component } from 'react'
import styled from "styled-components"

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
        background-image : url("https://images2.alphacoders.com/270/270990.jpg");
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
export default class Signin extends Component {
  render() {
    return (
      <Form>
        <h3 style={{position:'relative',backgroundColor:"black",color:"white", padding:"10px 10px"}}>Sign In</h3>

        <Inner className="mb-3">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            style={{border:"1.5px solid black"}}
          />
        </Inner>

        <Inner className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            style={{border:"1.5px solid black"}}
          />
        </Inner>

        <Inner className="mb-3">
          <Inner className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              style={{border:"1.5px solid black"}}
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </Inner>
        </Inner>

        <Inner className="d-grid">
          <button type="submit" className="btn btn-primary">
            <a style={{position:"relative" , textDecoration:"none", color:"black"}} href="/categories">Submit</a>
          </button>
        </Inner>
        <p style={{position:"relative",fontWeight:"bold", color:"black"}} className="forgot-password text-right">
          Forgot <a style={{position:"relative" , textDecoration:"none"}} href="#">password?</a>
        </p>
        <p style={{position:"relative",fontWeight:"bold", color:"black", fontSize: "20px"}} className="forgot-password text-right">
          New User <a style={{position:"relative" , textDecoration:"none" , fontSize: "20px"}} href="/register">Register Now!</a>
        </p>
      </Form>
    )
  }
}