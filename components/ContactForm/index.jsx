import styled from 'styled-components';
import { getMedias, getColor } from '../../styles/utils';
import FormButton from '../Button/FormButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import TextArea from './TextArea';
import useValidation from '../../hooks/useValidation';

const Form = styled.form`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 2rem;
  margin: 5rem 20vw;
  padding: 2rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px,
    rgba(0, 0, 0, 0.5) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.4) 0px -3px 0px inset;
  font-size: 2rem;

  @media (max-width: ${getMedias('laptop')}) {
    margin: 5rem 5vw;
  }

  @media (max-width: ${getMedias('tablet')}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${getMedias('mobile')}) {
    padding: 2rem 1rem;
  }
`;

const IconWrapper = styled.div`
  --shadowColor: ${getColor('clr-dark-100')};
  --shadow: 0px 0px 8px var(--shadowColor);

  display: flex;
  align-items: center;
  grid-column: span 2;
  font-size: clamp(6rem, 12vw, 20rem);

  & path {
    fill: ${getColor('clr-dark-200')};
    -webkit-filter: drop-shadow(var(--shadow));
    stroke: var(--shadowColor);
    filter: drop-shadow(var(--shadow));
  }

  & > h2 {
    margin: 0 auto;
  }

  @media (max-width: ${getMedias('tablet')}) {
    grid-column: initial;
  }
`;

const ContactForm = () => {
  const { isValidated, onSubmit, validate } = useValidation();

  return (
    <Form onSubmit={onSubmit}>
      <IconWrapper>
        <FontAwesomeIcon icon={faEnvelope} />
        <h2>Send us a message !</h2>
      </IconWrapper>

      <Input
        id="name"
        placeholder="Name"
        text="Name :"
        validate={validate}
      />

      <TextArea
        id="message"
        placeholder="Message"
        text="Message"
        validate={validate}
      />

      <Input
        id="email"
        placeholder="Email"
        text="Email :"
        validate={validate}
      />

      <FormButton>Send ME</FormButton>
    </Form>
  );
};

export default ContactForm;
