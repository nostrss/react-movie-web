import { useState } from '../../react-movie-webpage/node_modules/@types/react';

export const TodoList = () => {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChangeInput = (event) => {
    setToDo(event.target.value);
  };
  const onSubmitText = (event) => {
    setToDo(event.preventDefault());
    if (toDo === '') {
      return;
    }
    setToDo('');
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <hr />
      <h1>To-Do-List({toDos.length})</h1>
      <form onSubmit={onSubmitText}>
        <input
          onChange={onChangeInput}
          placeholder={'write here'}
          type='text'
          value={toDo}
        />
        <button>Add To do</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
