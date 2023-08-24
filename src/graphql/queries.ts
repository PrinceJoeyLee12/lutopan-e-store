/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      profile {
        name
        email
        phone
        __typename
      }
      stores {
        nextToken
        __typename
      }
      products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      companyId
      company {
        id
        createdAt
        updatedAt
        __typename
      }
      profile {
        name
        email
        phone
        __typename
      }
      type
      products {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      categories {
        nextToken
        __typename
      }
      customers {
        nextToken
        __typename
      }
      address {
        addressLine1
        addressLine2
        country
        region
        regionCode
        state
        stateCode
        city
        cityCode
        barangay
        barangayCode
        zipCode
        __typename
      }
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyId
        type
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      storeId
      store {
        id
        companyId
        type
        loyverse
        createdAt
        updatedAt
        __typename
      }
      products {
        nextToken
        __typename
      }
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        storeId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      storeId
      store {
        id
        companyId
        type
        loyverse
        createdAt
        updatedAt
        __typename
      }
      companyId
      company {
        id
        createdAt
        updatedAt
        __typename
      }
      categoryId
      category {
        id
        name
        storeId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      slug
      variants {
        nextToken
        __typename
      }
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        storeId
        companyId
        categoryId
        slug
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVariant = /* GraphQL */ `
  query GetVariant($id: ID!) {
    getVariant(id: $id) {
      id
      productId
      product {
        id
        name
        storeId
        companyId
        categoryId
        slug
        loyverse
        createdAt
        updatedAt
        __typename
      }
      sku
      soldByWeight
      price
      salePrice
      inventory
      option_one {
        name
        value
        __typename
      }
      option_two {
        name
        value
        __typename
      }
      option_three {
        name
        value
        __typename
      }
      loyverse
      inCartLineItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVariants = /* GraphQL */ `
  query ListVariants(
    $filter: ModelVariantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVariants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productId
        sku
        soldByWeight
        price
        salePrice
        inventory
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      number_1
      number_2
      address {
        addressLine1
        addressLine2
        country
        region
        regionCode
        state
        stateCode
        city
        cityCode
        barangay
        barangayCode
        zipCode
        __typename
      }
      loyverse {
        id
        customer_code
        data
        __typename
      }
      orderedStores {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      cart {
        id
        createdAt
        updatedAt
        cartUserId
        __typename
      }
      createdAt
      updatedAt
      userCartId
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        number_1
        number_2
        createdAt
        updatedAt
        userCartId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      user {
        id
        firstName
        lastName
        email
        number_1
        number_2
        createdAt
        updatedAt
        userCartId
        __typename
      }
      lineItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      cartUserId
      __typename
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        cartUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCartLineItem = /* GraphQL */ `
  query GetCartLineItem($id: ID!) {
    getCartLineItem(id: $id) {
      variantId
      variant {
        id
        productId
        sku
        soldByWeight
        price
        salePrice
        inventory
        loyverse
        createdAt
        updatedAt
        __typename
      }
      quantity
      id
      createdAt
      updatedAt
      variantInCartLineItemsId
      cartLineItemsId
      __typename
    }
  }
`;
export const listCartLineItems = /* GraphQL */ `
  query ListCartLineItems(
    $filter: ModelCartLineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartLineItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        variantId
        quantity
        id
        createdAt
        updatedAt
        variantInCartLineItemsId
        cartLineItemsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      customerId
      customer {
        id
        firstName
        lastName
        email
        number_1
        number_2
        createdAt
        updatedAt
        userCartId
        __typename
      }
      storeId
      store {
        id
        companyId
        type
        loyverse
        createdAt
        updatedAt
        __typename
      }
      receiptNumber
      receiptType
      orderDate
      lineItems {
        productId
        variantId
        storeId
        quantity
        price
        orginalPrice
        __typename
      }
      loyverse
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerId
        storeId
        receiptNumber
        receiptType
        orderDate
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStoreCustomers = /* GraphQL */ `
  query GetStoreCustomers($id: ID!) {
    getStoreCustomers(id: $id) {
      id
      storeId
      userId
      store {
        id
        companyId
        type
        loyverse
        createdAt
        updatedAt
        __typename
      }
      user {
        id
        firstName
        lastName
        email
        number_1
        number_2
        createdAt
        updatedAt
        userCartId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStoreCustomers = /* GraphQL */ `
  query ListStoreCustomers(
    $filter: ModelStoreCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStoresByCompany = /* GraphQL */ `
  query GetStoresByCompany(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getStoresByCompany(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyId
        type
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategoriesByStore = /* GraphQL */ `
  query GetCategoriesByStore(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCategoriesByStore(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        storeId
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProductsByStore = /* GraphQL */ `
  query GetProductsByStore(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProductsByStore(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        storeId
        companyId
        categoryId
        slug
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProductsByCompany = /* GraphQL */ `
  query GetProductsByCompany(
    $companyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProductsByCompany(
      companyId: $companyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        storeId
        companyId
        categoryId
        slug
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProductsByCategory = /* GraphQL */ `
  query GetProductsByCategory(
    $categoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProductsByCategory(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        storeId
        companyId
        categoryId
        slug
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getVariantsByProduct = /* GraphQL */ `
  query GetVariantsByProduct(
    $productId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVariantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getVariantsByProduct(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        productId
        sku
        soldByWeight
        price
        salePrice
        inventory
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrdersByUser = /* GraphQL */ `
  query GetOrdersByUser(
    $customerId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrdersByUser(
      customerId: $customerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerId
        storeId
        receiptNumber
        receiptType
        orderDate
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrdersByStore = /* GraphQL */ `
  query GetOrdersByStore(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrdersByStore(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerId
        storeId
        receiptNumber
        receiptType
        orderDate
        loyverse
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const storeCustomersByStoreId = /* GraphQL */ `
  query StoreCustomersByStoreId(
    $storeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeCustomersByStoreId(
      storeId: $storeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const storeCustomersByUserId = /* GraphQL */ `
  query StoreCustomersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStoreCustomersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    storeCustomersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storeId
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
