import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchString, updateSearchString } from '../../redux/store';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [searchString, setSearchString] = useState(useSelector(state =>getSearchString(state)));

  const dispatch = useDispatch();

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString))
  }

  return (
    <form className={styles.searchForm}>
      <TextInput value={searchString} onChange={(e) => setSearchString(e.target.value)} placeholder="Search..."/>
      <Button onClick={onSearch}>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;