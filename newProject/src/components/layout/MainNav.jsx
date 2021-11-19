import {Link} from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNav.module.css';
import FavoritesContext, { FavoritesContextProvider } from '../../store/favorite-context';

function MainNav() {

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li><Link to='/'>All Meetup Page</Link></li>
          <li>
            <Link to='/new-meetup'>
              Add New Meetup
            </Link></li>
          <li>
            <Link to='/favorites'>
              To Favorites
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;