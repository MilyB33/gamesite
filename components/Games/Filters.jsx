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
import { FilterWrapper } from './Games.styles';
import { useRouter } from 'next/router';

const ViewWrapper = styled.div`
  display: inherit;
  gap: inherit;
`;

const Filters = ({
  filter,
  sort,
  platforms,
  search,
  handleView,
  isList,
}) => {
  const router = useRouter();
  const renderPlatformsOptions = () =>
    platforms.map((platform) => (
      <option value={platform.id} key={platform.id}>
        {platform.abbreviation}
      </option>
    ));

  const setGalleryView = () => handleView(false);
  const setListView = () => handleView(true);

  return (
    <FilterWrapper>
      <CustomSelect name="order" filter={sort}>
        <option value="POPULARITY_ASC">Popularity asc</option>
        <option value="POPULARITY_DESC">Popularity desc</option>
        <option value="RATING_ASC">Rating asc</option>
        <option value="RATING_DESC">Rating desc</option>
        <option value="NAME_ASC">Name asc</option>
        <option value="NAME_DESC">Name desc</option>
      </CustomSelect>

      <CustomSelect
        name="platform"
        filter={filter}
        defaultValue={router.query.platform}
      >
        {renderPlatformsOptions()}
      </CustomSelect>

      <CustomSearch
        name="search"
        placeholder="Search for Game"
        search={search}
      />

      <ViewWrapper>
        <CustomIcon changeView={setListView} isList={isList}>
          <FontAwesomeIcon icon={faThList} />
        </CustomIcon>

        <CustomIcon changeView={setGalleryView} isList={!isList}>
          <FontAwesomeIcon icon={faThLarge} />
        </CustomIcon>
      </ViewWrapper>
    </FilterWrapper>
  );
};

Filters.propTypes = {
  sort: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  platforms: PropTypes.instanceOf(Array).isRequired,
  search: PropTypes.func.isRequired,
  handleView: PropTypes.func.isRequired,
  isList: PropTypes.bool.isRequired,
};

export default Filters;
