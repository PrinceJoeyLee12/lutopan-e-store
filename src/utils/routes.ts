import { allRoutes, Routes } from 'src/constants/index';

export const getPath = (route: any, { withoutParams = false } = {}) => {
  const path = allRoutes?.[route]?.path || '';
  return withoutParams ? path.slice(0, path.indexOf('/:')) : path;
};

export const getRouteTitle = (route: any) => allRoutes[route].title;

export const getRouteValue = (route: any) => allRoutes[route];
