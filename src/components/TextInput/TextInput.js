import styles from './TextInput.module.scss';

const TextInput = ({ placeholder, value, onChange }) => {
    return <input className={styles.input} value={value} onChange={onChange} placeholder={placeholder} type="text" />
};

export default TextInput;