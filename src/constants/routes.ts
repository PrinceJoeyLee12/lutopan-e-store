export const Routes = {
  // AUTH
  LOGIN: 'login',
  REGISTER: 'register',
  RESET_PASSWORD: 'reset_password',
  AUTH_CONFIRM: 'auth_confirm',

  // User
  USER_PROFILE: 'user_profile',
  // User Orders
  USER_ORDERS: 'orders',
  USER_ORDER: 'order',

  // Vendor
  VENDORS: 'vendors',
  VENDOR_PROFILE: 'vendor_profile',
  VENDOR_PRODUCTS: 'vendor_products',
  VENDOR_PRODUCT_CATEGORIES: 'vendors_products_categories',
  // Vendors Orders
  VENDOR_ORDERS: 'vendor_orders',
  VENDOR_ORDER: 'vendor_order',

  // Products
  PRODUCT_CATEGORIES: 'product_categories', // (e.g. Hardware, Groceries)
  PRODUCTS_BY_CATEGORY: 'products_by_category',
  PRODUCT_DETAILS: 'product_details',
  PRODUCT_REVIEWS: 'product_reviews',
};

export const userRoutes = {
  [Routes.USER_PROFILE]: {
    path: '/user/profile',
    title: 'User Profile',
  },
  [Routes.USER_ORDERS]: {
    path: '/user/orders',
    title: 'User Orders',
  },
  [Routes.USER_ORDER]: {
    path: '/user/orders/:orderId',
    title: 'User Order',
  },
};

export const vendorRoutes = {
  [Routes.VENDOR_PROFILE]: {
    path: '/vendor/profile/:vendorId',
    title: 'Vendor Profile',
  },
  [Routes.VENDOR_PRODUCTS]: {
    path: '/vendor/:vendorId/products',
    title: 'Vendor Products',
  },
  [Routes.VENDOR_ORDERS]: {
    path: '/vendor/:vendorId/orders',
    title: 'Vendor Orders',
  },
  [Routes.VENDOR_ORDER]: {
    path: '/vendor/:vendorId/order/:orderId',
    title: 'Vendor Order',
  },
};

export const authRoutes = {
  [Routes.LOGIN]: {
    path: '/login',
    title: 'Login',
  },
  [Routes.REGISTER]: {
    path: '/register',
    title: 'Register',
  },
  [Routes.RESET_PASSWORD]: {
    path: '/login',
    title: 'Login',
  },
  [Routes.AUTH_CONFIRM]: {
    path: '/email-confirm',
    title: 'Email Confirmation',
  },
};

export const productRoutes = {
  [Routes.PRODUCT_CATEGORIES]: {
    path: '/product/categories',
    title: 'Product Categories',
  },
  [Routes.PRODUCT_DETAILS]: {
    path: '/product/:productId',
    title: 'Product Details',
  },
  [Routes.PRODUCTS_BY_CATEGORY]: {
    path: '/product/categories/:categoryId?',
    title: 'Products',
  },
  [Routes.PRODUCT_REVIEWS]: {
    path: '/product/:productId/reviews',
    title: 'Reviews',
  },
};

export const allRoutes = {
  ...authRoutes,
  ...userRoutes,
  ...vendorRoutes,
  ...productRoutes,
};
