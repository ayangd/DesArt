import { Fragment, useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Header from './component/header';
import HeaderAdmin from './component/headerAdmin';
import ArticleEdit from './page/articleEdit';
import Articles from './page/articles';
import ArticleView from './page/articleView';
import ContactAdmin from './page/contactAdmin';
import ContactUsList from './page/contactUsList';
import Home from './page/home';
import Login from './page/login';
import LoginService from './service/login';

function App() {
  const history = useHistory();
  const loginService = LoginService.getInstance();
  const [header, setHeader] = useState(<Header />);

  useEffect(() => {
      let mounted = true;
      (async function() {
          const response = await loginService.checkUser();
          if (mounted) {
              if (response) {
                  setHeader(<HeaderAdmin />);
              }
          }
      })();

      return () => {
          mounted = false;
      };
  }, [loginService]);

  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/home');
    }
  });

  return (
    <Fragment>
      {header}
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/admin">
          <Switch>
            <Route path="/admin/contactus" component={ContactUsList} exact />
            <Route path="/admin/contactus/:id" component={ContactAdmin} exact />
            <Route path="/admin/articles/:id" component={ArticleEdit} exact />
          </Switch>
        </Route>
        <Route path="/articles" component={Articles} exact />
        <Route path="/article" component={ArticleView} exact />
      </Switch>
    </Fragment>
  );
}

export default App;
