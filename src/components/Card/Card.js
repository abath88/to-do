import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = ({id, title, isFavorite}) => {
  const dispatch = useDispatch();

  const handleFavorite = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(id));
  };
  const handleRemove = e => {
    e.preventDefault();
    dispatch(removeCard(id));
  }
  return (
    <li className={styles.card}>
      {title} 
      <div>
        <button onClick={handleFavorite} className={clsx(styles.button, isFavorite && styles.isFavorite)}>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </button>
        <button onClick={handleRemove} className={styles.button}>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  );
};

export default Card;