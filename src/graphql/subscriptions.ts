/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateVariant = /* GraphQL */ `
  subscription OnCreateVariant($filter: ModelSubscriptionVariantFilterInput) {
    onCreateVariant(filter: $filter) {
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
export const onUpdateVariant = /* GraphQL */ `
  subscription OnUpdateVariant($filter: ModelSubscriptionVariantFilterInput) {
    onUpdateVariant(filter: $filter) {
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
export const onDeleteVariant = /* GraphQL */ `
  subscription OnDeleteVariant($filter: ModelSubscriptionVariantFilterInput) {
    onDeleteVariant(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
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
export const onCreateCartLineItem = /* GraphQL */ `
  subscription OnCreateCartLineItem(
    $filter: ModelSubscriptionCartLineItemFilterInput
  ) {
    onCreateCartLineItem(filter: $filter) {
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
export const onUpdateCartLineItem = /* GraphQL */ `
  subscription OnUpdateCartLineItem(
    $filter: ModelSubscriptionCartLineItemFilterInput
  ) {
    onUpdateCartLineItem(filter: $filter) {
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
export const onDeleteCartLineItem = /* GraphQL */ `
  subscription OnDeleteCartLineItem(
    $filter: ModelSubscriptionCartLineItemFilterInput
  ) {
    onDeleteCartLineItem(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateStoreCustomers = /* GraphQL */ `
  subscription OnCreateStoreCustomers(
    $filter: ModelSubscriptionStoreCustomersFilterInput
  ) {
    onCreateStoreCustomers(filter: $filter) {
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
export const onUpdateStoreCustomers = /* GraphQL */ `
  subscription OnUpdateStoreCustomers(
    $filter: ModelSubscriptionStoreCustomersFilterInput
  ) {
    onUpdateStoreCustomers(filter: $filter) {
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
export const onDeleteStoreCustomers = /* GraphQL */ `
  subscription OnDeleteStoreCustomers(
    $filter: ModelSubscriptionStoreCustomersFilterInput
  ) {
    onDeleteStoreCustomers(filter: $filter) {
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
