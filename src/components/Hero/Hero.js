import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there<br />
        I am a Rails/React Developer
      </SectionTitle>
      <SectionText>
        I'm a passionate front-end software developer who builds websites using the latest technologies. I'm an ardent follower of web development best practices thus producing efficient, well-organized, and manageable code.
      </SectionText>
      <Button onClick ={() => window.location = "https://github.com/PNdunguMaina"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;