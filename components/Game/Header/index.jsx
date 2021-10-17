import HeaderInfo from './HeaderInfo';
import { Header } from './Header.styles';

const GameHeader = ({ name, rating, follows, age_rating }) => {
  console.log(age_rating);
  return (
    <Header>
      <h1>{name}</h1>
      <div>
        <HeaderInfo text="Rating" value={rating} />
        <HeaderInfo text="Follows" value={follows} />
        <HeaderInfo text="Age Rating" value={age_rating[0].name} />
      </div>
    </Header>
  );
};

export default GameHeader;
