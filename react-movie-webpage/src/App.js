import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/routes/Home';
import Detail from '../src/routes/Detail';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
