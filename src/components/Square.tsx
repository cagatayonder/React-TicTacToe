import * as React from 'react';
import styled from 'styled-components';
import { Value } from './GameState';
const StyledSquare = styled.button`
  width: 50px;
  height: 50px;
  background: #fff;
  border: 2px solid #999;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;
export type SquareProps = {
  value: Value;
  onClick: () => void;
};
export function Square(props: SquareProps) {
  return (
    <StyledSquare onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}