import PropTypes from 'prop-types';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import CustomSearch from './CustomSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThList,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import CustomIcon from './CustomIcon';

const ViewWrapper = styled.div`
  display: inherit;
  gap: inherit;
`;

const Filters = ({ filter, sort, platforms, search }) => {
  const renderPlatformsOptions = () =>
    platforms.map((platform) => (
      <option value={platform.id} key={platform.id}>
        {platform.abbreviation}
      </option>
    ));

  return (
    <>
      <CustomSelect name="order" filter={sort}>
        <option value="POPULARITY_ASC">Popularity asc</option>
        <option value="POPULARITY_DESC">Popularity desc</option>
        <option value="RATING_ASC">Rating asc</option>
        <option value="RATING_DESC">Rating desc</option>
        <option value="NAME_ASC">Name asc</option>
        <option value="NAME_DESC">Name desc</option>
      </CustomSelect>

      <CustomSelect name="platform" filter={filter}>
        {renderPlatformsOptions()}
      </CustomSelect>

      <CustomSearch
        name="search"
        placeholder="Search for Game"
        search={search}
      />

      <ViewWrapper>
        <CustomIcon>
          <FontAwesomeIcon icon={faThList} />
        </CustomIcon>

        <CustomIcon>
          <FontAwesomeIcon icon={faThLarge} />
        </CustomIcon>
      </ViewWrapper>
    </>
  );
};

Filters.propTypes = {
  sort: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  platforms: PropTypes.instanceOf(Array).isRequired,
  search: PropTypes.func.isRequired,
};

export default Filters;
