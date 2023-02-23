import styled from "styled-components";
import { Container, FooterTitle, Flex, Typography } from "../globalStyles";

export const FooterContainer = styled.div`
  background-color: var(--colorPurple);
  width: 100%;
  height: auto;
  margin-top: 200px;
`;

export const InfoContainer = styled(Container)`
  display: grid;
  padding: 25px 15px;
  width: 100%;
  justify-content: center;
  align-items: center;

  //--------> MEDIA QUERIES <--------
  @media screen and (min-width: 1200px) {
    padding: 100px 15px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const Card = styled.div`
  max-width: 300px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  //--------> MEDIA QUERIES <--------
  @media screen and (min-width: 1200px) {
    height: 250px;
    width: 100%;
  }
`;

export const CardTitle = styled(FooterTitle)`
  font-weight: var(--fontThin);
  width: auto;
  padding-bottom: 20px;
  color: var(--colorWhite);
  text-align: center;
`;

export const LinkUl = styled.ul`
  list-style: none;
`;

export const LinkLi = styled.li`
  font-size: var(--fontSm);
`;

export const CallInfo = styled(Flex)`
  color: var(--colorWhite);
  justify-content: flex-start;
  width: 100%;
`;

export const EmailInfo = styled(Flex)`
  justify-content: flex-start;
  color: var(--colorWhite);
  width: 100%;
`;

export const Text = styled(Typography)`
  color: var(--colorWhite);

  &.site-links {
    &:hover {
      color: var(--colorTan);
    }
  }
`;

export const Copyright = styled(Container)`
  width: 100%;
`;
