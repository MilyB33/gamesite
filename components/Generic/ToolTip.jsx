import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';
import { useState } from 'react';

const Information = styled.div`
  color: ${getColor('clr-error-100')};
`;

const ToolTip = ({ message }) => {
  return <>{message && <Information>{message}</Information>}</>;
};

ToolTip.defaultProps = {
  message: null,
};

ToolTip.propTypes = {
  message: PropTypes.string,
};

export default ToolTip;
