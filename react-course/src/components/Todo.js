function Todo(props) {
  
  const deletehandler = () => {
    return alert('deleted')
  }
  return (
    <div>
      <h1>My Todos</h1>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={deletehandler}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;