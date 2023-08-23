import {
  archiveOutline,
  beerOutline,
  cogOutline,
  eyeOutline,
  golfOutline,
  logOutOutline,
  mailOutline,
  mailUnreadOutline,
  mapOutline,
  personOutline,
  pulseOutline,
  refreshOutline,
  restaurantOutline,
  settingsOutline,
} from 'ionicons/icons';
import { buildSideMenuObject } from './Utils';
import { getPath } from 'src/utils/routes';
import { Routes } from 'src/constants/index';

export const defaultSide = [
  buildSideMenuObject(
    false,
    'Inbox',
    'Navigates to Inbox page',
    mailOutline,
    getPath(Routes.PRODUCT_CATEGORIES) as any,
  ),
];

export const tab1SideMenu = [
  buildSideMenuObject(
    false,
    'Inbox',
    'Navigates to Inbox page',
    mailOutline,
    getPath(Routes.PRODUCT_CATEGORIES) as any,
  ),
];

export const tab2SideMenu = [
  buildSideMenuObject(
    false,
    'Products',
    'Navigates to Profile page',
    personOutline,
    getPath(Routes.PRODUCTS_BY_CATEGORY) as any,
  ),
];

export const tab3SideMenu = [
  buildSideMenuObject(
    false,
    'Profile',
    'Navigates to Profile page',
    personOutline,
    getPath(Routes.PRODUCTS_BY_CATEGORY) as any,
  ),
  buildSideMenuObject(
    false,
    'Inbox',
    'Navigates to Inbox page',
    mailOutline,
    getPath(Routes.PRODUCT_CATEGORIES) as any,
  ),
  buildSideMenuObject(true),
  buildSideMenuObject(false, 'Pubs', undefined, beerOutline, null),
  buildSideMenuObject(false, 'Restaurants', undefined, restaurantOutline, null),
  buildSideMenuObject(false, 'Golf Courses', undefined, golfOutline, null),
  buildSideMenuObject(false, 'Hospitals', undefined, pulseOutline, null),
];
