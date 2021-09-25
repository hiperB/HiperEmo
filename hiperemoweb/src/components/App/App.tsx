import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { prefixWeb } from '../../config/config';
import Content from '../layouts/Content';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import ReportPage from '../pages/ReportPage';

import styles from './../App/App.module.scss';

const App: React.FC = () => (
  <div className={styles.component}>
    <Header />
    <Content>
        <Switch>
          <Route exact path={`${prefixWeb}/`} component={MainPage} />
          <Route exact path={`${prefixWeb}/videos/:videoId/report`} component={ReportPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
    </Content>
    <Footer />
  </div>
);

export default App;
