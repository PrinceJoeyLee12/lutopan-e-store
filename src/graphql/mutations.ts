/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createVariant = /* GraphQL */ `
  mutation CreateVariant(
    $input: CreateVariantInput!
    $condition: ModelVariantConditionInput
  ) {
    createVariant(input: $input, condition: $condition) {
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
export const updateVariant = /* GraphQL */ `
  mutation UpdateVariant(
    $input: UpdateVariantInput!
    $condition: ModelVariantConditionInput
  ) {
    updateVariant(input: $input, condition: $condition) {
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
export const deleteVariant = /* GraphQL */ `
  mutation DeleteVariant(
    $input: DeleteVariantInput!
    $condition: ModelVariantConditionInput
  ) {
    deleteVariant(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createCartLineItem = /* GraphQL */ `
  mutation CreateCartLineItem(
    $input: CreateCartLineItemInput!
    $condition: ModelCartLineItemConditionInput
  ) {
    createCartLineItem(input: $input, condition: $condition) {
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
export const updateCartLineItem = /* GraphQL */ `
  mutation UpdateCartLineItem(
    $input: UpdateCartLineItemInput!
    $condition: ModelCartLineItemConditionInput
  ) {
    updateCartLineItem(input: $input, condition: $condition) {
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
export const deleteCartLineItem = /* GraphQL */ `
  mutation DeleteCartLineItem(
    $input: DeleteCartLineItemInput!
    $condition: ModelCartLineItemConditionInput
  ) {
    deleteCartLineItem(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createStoreCustomers = /* GraphQL */ `
  mutation CreateStoreCustomers(
    $input: CreateStoreCustomersInput!
    $condition: ModelStoreCustomersConditionInput
  ) {
    createStoreCustomers(input: $input, condition: $condition) {
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
export const updateStoreCustomers = /* GraphQL */ `
  mutation UpdateStoreCustomers(
    $input: UpdateStoreCustomersInput!
    $condition: ModelStoreCustomersConditionInput
  ) {
    updateStoreCustomers(input: $input, condition: $condition) {
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
export const deleteStoreCustomers = /* GraphQL */ `
  mutation DeleteStoreCustomers(
    $input: DeleteStoreCustomersInput!
    $condition: ModelStoreCustomersConditionInput
  ) {
    deleteStoreCustomers(input: $input, condition: $condition) {
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
