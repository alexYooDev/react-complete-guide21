import MeetupList from "../components/layout/meetup/MeetupList";
import {useState, useEffect} from 'react';


const AllMeetups = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    fetch('https://react-get-go-default-rtdb.firebaseio.com/meetups.json'
    ).then((res)=>{
      return res.json()
    }).then(data=> {
      setIsLoading(false);
      setLoadedMeetups(data);
    });
  }, [isLoading]); //이전 상태 값에서의 변경을 감지, 변경이 되었을 때만 useEffect내부가 실행된다.

    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
    </section>
  );
}

export default AllMeetups;