import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/routes/Home';
import Detail from '../src/routes/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/movie'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
