import {useRef} from 'react';

import Card from './layout/ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
  // 값을 변경하는 것 (useState) 이 아닌,
  // 값을 읽어오는 것이 목적이라면, useRef를 사용
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();


  const submitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDesc
    }

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id='title' ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id='image' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id='address'ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input type="textarea" required id='description' rows='5' ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;