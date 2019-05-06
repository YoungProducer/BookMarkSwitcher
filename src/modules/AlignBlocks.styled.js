import styled from "styled-components";

export const FlexRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const FlexColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  width: ${props => props.width};
  height: ${props => props.height};
`;
