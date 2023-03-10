import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${'screen and (max-width: 640px)'} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${'screen and (max-width: 992px)'} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
