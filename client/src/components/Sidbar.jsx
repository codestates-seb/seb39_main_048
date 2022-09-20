import React from "react";
import styled from "styled-components";
import User from "../assets/User.png";

const Sidbar = () => {
  return (
    <>
      <Title>내 프로필</Title>
      <SideBar>
        <UserInfo>
          <div className="img">
            <img src={User} />
          </div>

          <UserName>kanghyew0n</UserName>
          <UserLoca></UserLoca>
          <EditButton>Edit</EditButton>
        </UserInfo>
      </SideBar>
    </>
  );
};

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const SideBar = styled.div`
  position: fixed;
  width: calc((80vw - 72px) / 4);
  height: 65vh;
  border: 1px solid #d7e2eb;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const UserInfo = styled.div`
  text-align: center;
  .img {
    width: 100px;
    height: 100px;
    background-color: #f0f0f0;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100px;
    /* height: 178px; */
  }
`;

const UserName = styled.div``;
const UserLoca = styled.div``;

const EditButton = styled.div``;

export default Sidbar;
