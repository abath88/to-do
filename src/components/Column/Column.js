import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

import styles from './Column.module.scss';

const Column = ({ id, title, icon, cards, action }) => {
  return (
    <article className={styles.column}>
      <span className={`${styles.icon} fa fa-${icon}`} />
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={id} action={action}/>
    </article>
  );
};

export default Column;