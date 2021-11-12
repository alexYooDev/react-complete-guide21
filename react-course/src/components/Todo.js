function Todo(props) {
  return (
    <div>
      <h1>My Todos</h1>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick=''>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;