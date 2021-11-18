import NewMeetupForm from "../components/NewMeetupForm";
import { useHistory } from 'react-router-dom';

const NewMeetup = () => {
  const history = useHistory();
  
  const AddMeetupHandler = (meetupData) => {
    fetch('https://react-get-go-default-rtdb.firebaseio.com/meetups.json', 
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    ).then(()=>{
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler}/>
    </section>
  );
}

export default NewMeetup;