import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer, SocialIcons } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+254 727699538">+254 727699538</LinkItem>
        </LinkColumn>
          <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ndunguwamaina@gmail.com">ndunguwamaina@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons>
          <SocialIcons href="https://github.com/PNdunguMaina">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/pndungumaina/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
