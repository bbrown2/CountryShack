import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { routes } from "./data";
import {
  FooterContainer,
  InfoContainer,
  LinkUl,
  CallInfo,
  EmailInfo,
  Copyright,
  Text,
  Card,
  CardTitle,
} from "./footer.styles";

const NavLink = styled(Link)`
  text-decoration: none;
`;

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <FooterContainer>
        <InfoContainer>
          <Card>
            <div>
              <CardTitle>Links</CardTitle>
              <LinkUl>
                {routes.map((item, id) => {
                  return (
                    <NavLink onClick={scrollToTop} key={id} to={item.link}>
                      <Text className="site-links">{item.text}</Text>
                    </NavLink>
                  );
                })}
              </LinkUl>
            </div>
          </Card>
          <Card>
            <div>
              <CardTitle>Location</CardTitle>
              <Text>1710 Wenix Ave, Raleigh, NC 27893</Text>
            </div>
          </Card>
          <Card>
            <div>
              <CardTitle>Contact Us</CardTitle>
              <CallInfo>
                <FaPhoneAlt style={{ marginRight: "8px" }} />
                <Text>145-424-9404</Text>
              </CallInfo>
              <EmailInfo>
                <FaEnvelope style={{ marginRight: "8px" }} />
                <Text>countryshack@foods.net</Text>
              </EmailInfo>
            </div>
          </Card>
        </InfoContainer>
        <Copyright>
          <Text>© 2021 Country Shack Restaurant LLC.</Text>
        </Copyright>
      </FooterContainer>
    </React.Fragment>
  );
}

export default Footer;
