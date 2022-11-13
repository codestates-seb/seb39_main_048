import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        ⓒ 2022. <span> seoul in petkage</span> all rights reserved.
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  display: flex;
  margin-top: 100px;
  color: #fff;
  background-color: #4da772;
  padding: 0 10%;
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  span {
    font-weight: 600;
  }
`;

export default Footer;
