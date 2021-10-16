import { ContactWrapper } from './Views.styles';
import ContactForm from '../ContactForm';

const ContactView = () => {
  return (
    <ContactWrapper>
      <h2>Send us a message !</h2>

      <ContactForm />
    </ContactWrapper>
  );
};

export default ContactView;
