import { createContext, useState } from 'react';

// 프롭 드릴링 없이 스테이트를 전역으로 관리하기 위한 콘텍스트 훅
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

// 컨텍스트 값을 없데이트 한다.
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites)=> {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites(prevUserFavorites=>{
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }



  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
  <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
  );
}

export default FavoritesContext;