import { useState } from 'react';

import { useDispatch } from 'react-redux';

import styles from './ColumnForm.module.scss';
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput';

const ColumnForm = ({ action }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setTitle('');
    setIcon('');
 };
	return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label className={styles.label}>Title:</label><TextInput className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <label className={styles.label}>Icon:</label><TextInput className={styles.input} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;