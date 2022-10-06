import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import { Container } from "../globalStyles";

const InfoSection = () => {
  return (
    <>
      <Info>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>h</TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </Info>
    </>
  );
};

const Info = styled.div`
  color: #fff;
  padding: 160px 0;
  background: #101522;
`;
const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
`;

const TextWrapper = styled.div``;

export default InfoSection;
