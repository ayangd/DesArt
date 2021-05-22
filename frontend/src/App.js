import { Route, Switch } from 'react-router';
import Header from './component/header';
import Login from './page/login';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} exact />
    </Switch>
  );
}

export default App;
