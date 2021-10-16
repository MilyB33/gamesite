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
  margin: 0 20vw;
  padding: 2rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px,
    rgba(0, 0, 0, 0.5) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.4) 0px -3px 0px inset;
  font-size: 2rem;
  background: ${getColor('clr-dark-300')};
  border-radius: 15px;

  @media (max-width: ${getMedias('laptop')}) {
    margin: 0 5vw;
  }

  @media (max-width: ${getMedias('tablet')}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${getMedias('mobile')}) {
    padding: 2rem 1rem;
  }
`;

const IconWrapper = styled.div`
  --shadowColor: ${getColor('clr-light-100')};
  --shadow: 0px 0px 8px var(--shadowColor);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  grid-column: span 2;
  font-size: clamp(6rem, 12vw, 20rem);

  & path {
    fill: ${getColor('clr-light-200')};
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
  const {
    onSubmit,
    getValue,
    state: { name, email, message },
  } = useValidation();

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
        getValue={getValue}
        validation={name}
      />

      <TextArea
        id="message"
        placeholder="Message"
        text="Message"
        getValue={getValue}
        validation={message}
      />

      <Input
        id="email"
        placeholder="Email"
        text="Email :"
        getValue={getValue}
        validation={email}
      />

      <FormButton>Send ME</FormButton>
    </Form>
  );
};

export default ContactForm;
