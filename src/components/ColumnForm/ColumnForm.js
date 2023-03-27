import { useState } from 'react';

import styles from './ColumnForm.module.scss';
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput';

const ColumnForm = ({ action }) => {
  const [value, setValue] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    action({ title: value, icon: icon });
    setValue('');
    setIcon('');
  }
	return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label className={styles.label}>Title:</label><TextInput className={styles.input} type="text" value={value} onChange={e => setValue(e.target.value)} />
      <label className={styles.label}>Icon:</label><TextInput className={styles.input} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;