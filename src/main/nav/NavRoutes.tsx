import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import SideMenu from '../SideMenu';
import { SubPages, Tabs, tabRoutes } from './AllRoutes';
import { allRoutes } from 'src/constants/index';

const NavRoutes = () => {
  const routesArr = Object.values(allRoutes)?.map(({ path }) => path);
  return (
    <IonReactRouter>
      <IonSplitPane contentId='main'>
        <SideMenu />

        <IonRouterOutlet id='main'>
          <Route path={routesArr} render={() => <Tabs />} />
          <SubPages />

          <Route
            path='/'
            component={tabRoutes.filter((t) => t.default)[0].component}
            exact={true}
          />
          <Redirect
            exact
            from='/'
            to={tabRoutes.filter((t) => t.default)[0].path.toString()}
          />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default NavRoutes;
