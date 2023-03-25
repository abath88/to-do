import styles from './Column.module.scss';

const Column = ({ title, icon }) => {
  return (
    <article className={styles.column}>
      <span className={`${styles.icon} fa fa-${icon}`} />
      <h2 className={styles.title}>{title}</h2>
    </article>
  );
};

export default Column;