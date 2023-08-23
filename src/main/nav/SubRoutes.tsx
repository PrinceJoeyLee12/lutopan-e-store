import { Route } from 'react-router-dom';

const SubRoutes = (props: any) => {
  return (
    <>
      {props.routes.map((route: any, i: number) => {
        const RouteComponent = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            render={(props) => (
              <RouteComponent
                {...props}
                sideMenu={route.sideMenu ? true : false}
                sideMenuOptions={
                  route.sideMenuOptions ? route.sideMenuOptions : false
                }
              />
            )}
            exact={false}
          />
        );
      })}
    </>
  );
};

export default SubRoutes;
