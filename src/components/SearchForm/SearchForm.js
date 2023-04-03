import { useState } from 'react';

import { useDispatch } from 'react-redux';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();

  const onSearch = (e) => {
    e.preventDefault();
    dispatch({type: 'CHANGE_FILTER', payload: searchString })
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