import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import ContactAdmin from './page/contactAdmin';
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
      <Route path="/admin">
        <Switch>
          <Route path="/admin/contact" component={ContactAdmin} exact />
        </Switch>
      </Route>
    </Switch>
  );
}

export default App;
