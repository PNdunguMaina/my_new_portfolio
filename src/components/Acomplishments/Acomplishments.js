import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 42, text: 'Open Source Projects'},
  {number: 529, text: 'Total Github commits'},
  {number: 20, text: 'Total contributions to other projects'}
]

const Acomplishments = () => (
 <Section>
  <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
 </Section>
);

export default Acomplishments;
