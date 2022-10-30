import styled from "styled-components";

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuText = styled.span`
  padding: 10px;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`;

export const MenuWrapper = styled.div`
  &:hover ${MenuText} {
  }
`;
