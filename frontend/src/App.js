import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Home from './page/home';
import Login from './page/login';

function App() {
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/home');
    }
  });

  return (
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/home" component={Home} exact />
    </Switch>
  );
}

export default App;
