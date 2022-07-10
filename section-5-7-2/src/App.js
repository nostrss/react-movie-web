import {
  useState,
  useEffect,
} from '../../react-movie-webpage/node_modules/@types/react';

function Hello() {
  useEffect(function () {
    console.log('hi :)');
    return function () {
      console.log('bye :(');
    };
  }, []);
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setkeyWord] = useState('');
  const onClickCounter = () => setValue((prev) => prev + 1);
  const onChangeSearch = (event) => {
    setkeyWord(event.target.value);
  };
  useEffect(() => {
    console.log('I run only once.');
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log('I run when keyword & counter change');
  }, [keyword, counter]);

  const [showing, setShowing] = useState(false);
  const onClickShow = () => setShowing((prev) => !prev);

  return (
    <div>
      <input
        type='text'
        placeholder='Serach here...'
        onChange={onChangeSearch}
      />
      <h1>{counter}</h1>
      <button onClick={onClickCounter}>Add 1</button>

      {showing ? <Hello /> : null}
      <button onClick={onClickShow}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
