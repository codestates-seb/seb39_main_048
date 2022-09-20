import React from 'react'
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterGroup>
      Footer
    </FooterGroup>
  )
}

const FooterGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: #4DA772;
  margin-top: 200px;
  color: #fff;

`

export default Footer