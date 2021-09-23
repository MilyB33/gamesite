import CustomSelect from './CustomSelect';
import CustomSearch from './CustomSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThList,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import CustomIcon from './CustomIcon';

const Filters = () => {
  return (
    <>
      <CustomSelect name="order">
        <option value="popularity_asc">Popularity asc</option>
        <option value="popularity_desc">Popularity desc</option>
        <option value="rating_asc">rating asc</option>
        <option value="rating_asc">rating desc</option>
        <option value="name_asc">name asc</option>
        <option value="name_desc">name desc</option>
      </CustomSelect>

      <CustomSelect name="platform">
        <option value="popularity_asc">PS4</option>
        <option value="popularity_desc">PS5</option>
        <option value="rating_asc">PC</option>
        <option value="rating_asc">Switch</option>
        <option value="name_asc">Android</option>
        <option value="name_desc">Wii</option>
      </CustomSelect>

      <CustomSearch name="search" placeholder="Search for Game" />

      <CustomIcon>
        <FontAwesomeIcon icon={faThList} />
      </CustomIcon>

      <CustomIcon>
        <FontAwesomeIcon icon={faThLarge} />
      </CustomIcon>
    </>
  );
};

export default Filters;
