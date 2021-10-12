import LayoutSub from '../components/Layouts/LayoutSub';
import ContactForm from '../components/ContactForm';
const ContactPage = () => (
  <>
    <ContactForm />
  </>
);

ContactPage.getLayout = function displayLayout(page) {
  return <LayoutSub title="Contact">{page}</LayoutSub>;
};

export default ContactPage;
