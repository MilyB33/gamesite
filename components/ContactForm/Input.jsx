import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getMedias } from '../../styles/utils';

const Label = styled.label`
  width: clamp(10rem, 15vw, 40rem);
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 2.5rem 1rem;
  cursor: auto;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px,
    rgba(0, 0, 0, 0.5) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.4) 0px -3px 0px inset;
`;

const Input = ({ id, placeholder, text }) => {
  return (
    <Label htmlFor={id}>
      <p>{text}</p>
      <StyledInput type="text" id={id} placeholder={placeholder} />
    </Label>
  );
};

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Input;
