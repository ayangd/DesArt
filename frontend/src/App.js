import { Route, Switch, useHistory } from 'react-router';
import Home from './page/home';
import Login from './page/login';

function App() {
  const history = useHistory();

  return (
    <Switch>
      <Route path="/" exact>
        {history.push('/home')}
      </Route>
      <Route path="/login" component={Login} exact />
      <Route path="/home" component={Home} exact />
    </Switch>
  );
}

export default App;
