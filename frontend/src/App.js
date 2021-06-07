import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import ContactAdmin from './page/contactAdmin';
import ContactUsList from './page/contactUsList';
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
          <Route path="/admin/contactus" component={ContactUsList} exact />
          <Route path="/admin/contactus/:id" component={ContactAdmin} exact />
        </Switch>
      </Route>
    </Switch>
  );
}

export default App;
