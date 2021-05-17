import React from 'react';
import styled from 'styled-components';

interface Props {
  null?: void;
}

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(10, 30, 66, 0.4) none repeat scroll 0% 0%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal: React.FC<Props> = ({children}) => {
  return <ModalBackground>{children}</ModalBackground>;
};