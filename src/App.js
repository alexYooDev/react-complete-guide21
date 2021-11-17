import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AllMeetups from './components/AllMeetups';
import NewMeetup from './components/NewMeetup';
import Favorites from './components/Favorites';

function App() {
  return (
  <div>
    <Routes>
     <Route exact path='/' element={AllMeetups}/>
     <Route path='/new-meetup' element={NewMeetup}/>
     <Route path='/favorites' element={Favorites}/>
    </Routes>
  </div>
  );
}

export default App;
