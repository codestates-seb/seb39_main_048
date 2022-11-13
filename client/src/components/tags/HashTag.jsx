import React from 'react'
import styled from "styled-components";

const HashTag = ({text}) => {
  return (
    <Tag># {text}</Tag>
  )
}

const Tag = styled.div`
  padding: 5px 10px;
  font-size: 11px;
  background-color: #fff;
  color: #999;
  border: 1px solid #aaa;
  border-radius: 50px;
`

export default HashTag