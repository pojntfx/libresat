import styled from 'styled-components';

export const ProjectList = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  &::after {
    content: "";
    padding: 0.1em;
  }
`;