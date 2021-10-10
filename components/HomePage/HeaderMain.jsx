import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header, Button } from './HomePage.styles';

const HeaderMain = () => (
  <Header>
    <h1>Game On!</h1>

    <Button href="#Platforms">
      <h2>
        <FontAwesomeIcon icon={faLongArrowAltDown} />
      </h2>
    </Button>
  </Header>
);

export default HeaderMain;
