import { useDispatch } from 'react-redux';
import { updateFavorite } from '../../redux/store';

import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = ({id, title, isFavorite}) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(updateFavorite(id));
  };
  return (
    <li className={styles.card}>
      {title} 
      <button onClick={handleClick} className={clsx(styles.favorite, isFavorite && styles.isFavorite)}>
        <i className="fa fa-star-o" aria-hidden="true"></i>
      </button>
    </li>
  );
};

export default Card;