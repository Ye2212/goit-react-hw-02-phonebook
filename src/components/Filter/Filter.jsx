import propTypes from 'prop-types';
import { FilterLabel, FilterText, FilterInput } from './Filter.styled';

function Filter({ filter, changeFilter }) {
  return (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </FilterLabel>
  );

}

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  changeFilter: propTypes.func.isRequired,
}

export default Filter;
