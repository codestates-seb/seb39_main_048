import React from 'react'
import styled from "styled-components";

const HashTag = ({text}) => {
  return (
    <Tag># {text}</Tag>
  )
}

const Tag = styled.div`
  padding: 8px 12px;
  font-size: 12px;
  background-color: #fff;
  color: #999;
  border: 1px solid #999;
  border-radius: 50px;
`

export default HashTag