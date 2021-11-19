import { useContext } from 'react';
import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetup/MeetupList';


const Favorites = () => {
  const FavoritesCtx = useContext(FavoritesContext);
  
  let content;

  if(FavoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites. Starting add some?</p>
  } else {
    content = <MeetupList meetups={FavoritesCtx.favorites}></MeetupList>
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;