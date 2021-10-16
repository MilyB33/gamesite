import LayoutSub from '../components/Layouts/LayoutSub';
import ContactView from '../components/Views/ContactView';
const ContactPage = () => (
  <>
    <ContactView />
  </>
);

ContactPage.getLayout = function displayLayout(page) {
  return <LayoutSub title="Contact">{page}</LayoutSub>;
};

export default ContactPage;
