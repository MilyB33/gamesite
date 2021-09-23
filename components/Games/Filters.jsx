import CustomSelect from './CustomSelect';
import CustomSearch from './CustomSearch';

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
    </>
  );
};

export default Filters;
