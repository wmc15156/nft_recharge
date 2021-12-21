import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import { routes } from './constants';

export const PublicRouter = () => {
  const { HOME } = routes;
  return (
    <>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
      </Switch>
    </>
  );
};
