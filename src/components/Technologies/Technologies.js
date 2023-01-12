import React from 'react';
import { DiReact, DiRuby, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Backend To UI/UX Designs
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              <ul>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiRuby size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              <ul>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              <ul>
                <li>Figma</li>
                <li>Behance</li>
              </ul>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>Tools & Methods</ListTitle>
            <ListParagraph>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Gitlab</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Render</li>
                <li>Mobile/Responsive Development</li>
                <li>RSpec</li>
                <li>TDD</li>
                <li>Dev Tools</li>
              </ul>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>Professional</ListTitle>
            <ListParagraph>
              <ul>
                <li>Remote Pair-Programming</li>
                <li>Teamwork</li>
                <li>Mentoring</li>
              </ul>
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
