import styled from 'styled-components';
import { getMedias } from '../../styles/utils';
import FormButton from '../Button/FormButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import TextArea from './TextArea';

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
  grid-column: span 2;
  font-size: clamp(6rem, 15vw, 20rem);
  margin: 0 auto;

  @media (max-width: ${getMedias('tablet')}) {
    grid-column: initial;
  }
`;

const ContactForm = () => {
  return (
    <Form>
      <IconWrapper>
        <FontAwesomeIcon icon={faEnvelope} />
      </IconWrapper>

      <Input id="name" placeholder="Name" text="Name :" />

      <TextArea id="message" placeholder="Message" text="Message" />

      <Input id="email" placeholder="Email" text="Email :" />

      <FormButton>Send ME</FormButton>
    </Form>
  );
};

export default ContactForm;
