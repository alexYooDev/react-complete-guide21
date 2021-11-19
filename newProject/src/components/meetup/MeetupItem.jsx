import { useContext } from 'react';

import {Link} from 'react-router-dom';
import Card from '../layout/ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorite-context';


const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const ToggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        address: props.address,
        image: props.image,
        description: props.description,
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card >
        <div className={classes.image}>
          <img src={props.image} alt={props.titile} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={ToggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>  
    </li>
  );
}

export default MeetupItem;