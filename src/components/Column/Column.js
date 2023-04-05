import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

import styles from './Column.module.scss';

const Column = ({ id, title, icon }) => {
  const cards = useSelector(state => getFilteredCards(state, id));

  return (
    <article className={styles.column}>
      <span className={`${styles.icon} fa fa-${icon}`} />
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card id={card.id} key={card.id} title={card.title} isFavorite={card.isFavorite} />)}
      </ul>
      <CardForm columnId={id}/>
    </article>
  );
};

export default Column;