import React from 'react';
import styled from 'styled-components';
import { getColor } from '../styles/utils';

const Footer = () => {
  return (
    <StyledFooter>
      <h5>Created by Miłosz Bolewski. All rights reserved ®.</h5>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 3rem;
  background: ${getColor('clr-dark-200')};
`;

export default Footer;
