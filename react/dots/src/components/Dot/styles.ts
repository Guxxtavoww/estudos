import styled from "styled-components";

export const DotContainer = styled.div<{ xLocation: number; yLocation: number }>`
  position: absolute;
  top: ${props => props.yLocation}px;
  left: ${props => props.xLocation}px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
  z-index: 3;
`;
