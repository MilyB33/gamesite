import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Footer = () => {
  return (
    <StyledFooter>
      <h5>Created by Miłosz Bolewski. All rights reserved ®.</h5>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 3rem;
  margin-top: auto;
  background: ${getColor('clr-dark-200')};
  box-shadow: 0 -2px 32px ${getColor('clr-dark-100')};
`;

export default Footer;
