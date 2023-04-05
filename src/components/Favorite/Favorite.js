import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store";
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";

import styles from './Favorite.module.scss';

const Favorite = () => {
  const cards = useSelector( state => getFavoriteCards(state))
  return(
    <article className={styles.column}>
      <PageTitle>Favorite</PageTitle>
      {cards.map(card => <Card key={card.id} id={card.id} isFavorite={card.isFavorite} title={card.title} />)}
    </article>
  )
}

export default Favorite;