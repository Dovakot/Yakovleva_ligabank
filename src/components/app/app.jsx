import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {AppRoute} from '../../const';

import BasePage from '../base-page/base-page';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main />
        </Route>

        <Route path={AppRoute.SERVICES} exact>
          <BasePage title="Услуги" />
        </Route>

        <Route path={AppRoute.CALCULATOR} exact>
          <BasePage title="Рассчитать кредит" />
        </Route>

        <Route path={AppRoute.CONTACTS} exact>
          <BasePage title="Контакты" />
        </Route>

        <Route path={AppRoute.SUPPORT} exact>
          <BasePage title="Задать вопрос" />
        </Route>

        <Route path={AppRoute.LOGIN} exact>
          <BasePage title="Войти" />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
