/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCompanyInput = {
  id?: string | null,
  profile: CompanyProfileInput,
};

export type CompanyProfileInput = {
  name: string,
  email?: string | null,
  phone?: string | null,
  address?: AddressInput | null,
};

export type AddressInput = {
  addressLine1?: string | null,
  addressLine2?: string | null,
  country?: string | null,
  region?: string | null,
  regionCode?: string | null,
  state?: string | null,
  stateCode?: string | null,
  city?: string | null,
  cityCode?: string | null,
  barangay?: string | null,
  barangayCode?: string | null,
  zipCode?: string | null,
};

export type ModelCompanyConditionInput = {
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type Company = {
  __typename: "Company",
  id: string,
  profile: CompanyProfile,
  stores?: ModelStoreConnection | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type CompanyProfile = {
  __typename: "CompanyProfile",
  name: string,
  email?: string | null,
  phone?: string | null,
  address?: Address | null,
};

export type Address = {
  __typename: "Address",
  addressLine1?: string | null,
  addressLine2?: string | null,
  country?: string | null,
  region?: string | null,
  regionCode?: string | null,
  state?: string | null,
  stateCode?: string | null,
  city?: string | null,
  cityCode?: string | null,
  barangay?: string | null,
  barangayCode?: string | null,
  zipCode?: string | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
};

export type Store = {
  __typename: "Store",
  id: string,
  companyId: string,
  company?: Company | null,
  profile: StoreProfile,
  type: string,
  products?: ModelProductConnection | null,
  orders?: ModelOrderConnection | null,
  categories?: ModelCategoryConnection | null,
  customers?: ModelStoreCustomersConnection | null,
  address?: Address | null,
  loyverse?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type StoreProfile = {
  __typename: "StoreProfile",
  name: string,
  email?: string | null,
  phone?: string | null,
  address?: Address | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  storeId: string,
  store?: Store | null,
  companyId: string,
  company?: Company | null,
  categoryId?: string | null,
  category?: Category | null,
  slug: string,
  variants?: ModelVariantConnection | null,
  loyverse?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  storeId: string,
  store?: Store | null,
  products?: ModelProductConnection | null,
  loyverse?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelVariantConnection = {
  __typename: "ModelVariantConnection",
  items:  Array<Variant | null >,
  nextToken?: string | null,
};

export type Variant = {
  __typename: "Variant",
  id: string,
  productId: string,
  product?: Product | null,
  sku: string,
  soldByWeight: boolean,
  price?: number | null,
  salePrice?: number | null,
  inventory?: number | null,
  option_one?: VariantOption | null,
  option_two?: VariantOption | null,
  option_three?: VariantOption | null,
  loyverse?: string | null,
  inCartLineItems?: ModelCartLineItemConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type VariantOption = {
  __typename: "VariantOption",
  name: string,
  value: string,
};

export type ModelCartLineItemConnection = {
  __typename: "ModelCartLineItemConnection",
  items:  Array<CartLineItem | null >,
  nextToken?: string | null,
};

export type CartLineItem = {
  __typename: "CartLineItem",
  variantId: string,
  variant?: Variant | null,
  quantity: number,
  id: string,
  createdAt: string,
  updatedAt: string,
  variantInCartLineItemsId?: string | null,
  cartLineItemsId?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  customerId: string,
  customer?: User | null,
  storeId: string,
  store?: Store | null,
  receiptNumber: string,
  receiptType: string,
  orderDate: string,
  lineItems?:  Array<LineItem | null > | null,
  loyverse?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  number_1?: string | null,
  number_2?: string | null,
  address?: Address | null,
  loyverse?: UserCustomer | null,
  orderedStores?: ModelStoreCustomersConnection | null,
  orders?: ModelOrderConnection | null,
  cart?: Cart | null,
  createdAt: string,
  updatedAt: string,
  userCartId?: string | null,
};

export type UserCustomer = {
  __typename: "UserCustomer",
  id?: string | null,
  customer_code?: string | null,
  data?: string | null,
};

export type ModelStoreCustomersConnection = {
  __typename: "ModelStoreCustomersConnection",
  items:  Array<StoreCustomers | null >,
  nextToken?: string | null,
};

export type StoreCustomers = {
  __typename: "StoreCustomers",
  id: string,
  storeId: string,
  userId: string,
  store: Store,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type Cart = {
  __typename: "Cart",
  id: string,
  user?: User | null,
  lineItems?: ModelCartLineItemConnection | null,
  createdAt: string,
  updatedAt: string,
  cartUserId?: string | null,
};

export type LineItem = {
  __typename: "LineItem",
  productId: string,
  variantId: string,
  storeId: string,
  quantity: number,
  price: number,
  orginalPrice?: number | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type UpdateCompanyInput = {
  id: string,
  profile?: CompanyProfileInput | null,
};

export type DeleteCompanyInput = {
  id: string,
};

export type CreateStoreInput = {
  id?: string | null,
  companyId: string,
  profile: StoreProfileInput,
  type: string,
  address?: AddressInput | null,
  loyverse?: string | null,
};

export type StoreProfileInput = {
  name: string,
  email?: string | null,
  phone?: string | null,
  address?: AddressInput | null,
};

export type ModelStoreConditionInput = {
  companyId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateStoreInput = {
  id: string,
  companyId?: string | null,
  profile?: StoreProfileInput | null,
  type?: string | null,
  address?: AddressInput | null,
  loyverse?: string | null,
};

export type DeleteStoreInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  storeId: string,
  loyverse?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  storeId?: ModelIDInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  storeId?: string | null,
  loyverse?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  storeId: string,
  companyId: string,
  categoryId?: string | null,
  slug: string,
  loyverse?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  storeId?: ModelIDInput | null,
  companyId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  slug?: ModelStringInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  storeId?: string | null,
  companyId?: string | null,
  categoryId?: string | null,
  slug?: string | null,
  loyverse?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateVariantInput = {
  id?: string | null,
  productId: string,
  sku: string,
  soldByWeight: boolean,
  price?: number | null,
  salePrice?: number | null,
  inventory?: number | null,
  option_one?: VariantOptionInput | null,
  option_two?: VariantOptionInput | null,
  option_three?: VariantOptionInput | null,
  loyverse?: string | null,
};

export type VariantOptionInput = {
  name: string,
  value: string,
};

export type ModelVariantConditionInput = {
  productId?: ModelIDInput | null,
  sku?: ModelStringInput | null,
  soldByWeight?: ModelBooleanInput | null,
  price?: ModelFloatInput | null,
  salePrice?: ModelFloatInput | null,
  inventory?: ModelFloatInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelVariantConditionInput | null > | null,
  or?: Array< ModelVariantConditionInput | null > | null,
  not?: ModelVariantConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateVariantInput = {
  id: string,
  productId?: string | null,
  sku?: string | null,
  soldByWeight?: boolean | null,
  price?: number | null,
  salePrice?: number | null,
  inventory?: number | null,
  option_one?: VariantOptionInput | null,
  option_two?: VariantOptionInput | null,
  option_three?: VariantOptionInput | null,
  loyverse?: string | null,
};

export type DeleteVariantInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  number_1?: string | null,
  number_2?: string | null,
  address?: AddressInput | null,
  loyverse?: UserCustomerInput | null,
  userCartId?: string | null,
};

export type UserCustomerInput = {
  id?: string | null,
  customer_code?: string | null,
  data?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  number_1?: ModelStringInput | null,
  number_2?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userCartId?: ModelIDInput | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  number_1?: string | null,
  number_2?: string | null,
  address?: AddressInput | null,
  loyverse?: UserCustomerInput | null,
  userCartId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCartInput = {
  id?: string | null,
  cartUserId?: string | null,
};

export type ModelCartConditionInput = {
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
  cartUserId?: ModelIDInput | null,
};

export type UpdateCartInput = {
  id: string,
  cartUserId?: string | null,
};

export type DeleteCartInput = {
  id: string,
};

export type CreateCartLineItemInput = {
  variantId: string,
  quantity: number,
  id?: string | null,
  variantInCartLineItemsId?: string | null,
  cartLineItemsId?: string | null,
};

export type ModelCartLineItemConditionInput = {
  variantId?: ModelIDInput | null,
  quantity?: ModelFloatInput | null,
  and?: Array< ModelCartLineItemConditionInput | null > | null,
  or?: Array< ModelCartLineItemConditionInput | null > | null,
  not?: ModelCartLineItemConditionInput | null,
  variantInCartLineItemsId?: ModelIDInput | null,
  cartLineItemsId?: ModelIDInput | null,
};

export type UpdateCartLineItemInput = {
  variantId?: string | null,
  quantity?: number | null,
  id: string,
  variantInCartLineItemsId?: string | null,
  cartLineItemsId?: string | null,
};

export type DeleteCartLineItemInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  customerId: string,
  storeId: string,
  receiptNumber: string,
  receiptType: string,
  orderDate: string,
  lineItems?: Array< LineItemInput | null > | null,
  loyverse?: string | null,
};

export type LineItemInput = {
  productId: string,
  variantId: string,
  storeId: string,
  quantity: number,
  price: number,
  orginalPrice?: number | null,
};

export type ModelOrderConditionInput = {
  customerId?: ModelIDInput | null,
  storeId?: ModelIDInput | null,
  receiptNumber?: ModelStringInput | null,
  receiptType?: ModelStringInput | null,
  orderDate?: ModelStringInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type UpdateOrderInput = {
  id: string,
  customerId?: string | null,
  storeId?: string | null,
  receiptNumber?: string | null,
  receiptType?: string | null,
  orderDate?: string | null,
  lineItems?: Array< LineItemInput | null > | null,
  loyverse?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateStoreCustomersInput = {
  id?: string | null,
  storeId: string,
  userId: string,
};

export type ModelStoreCustomersConditionInput = {
  storeId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelStoreCustomersConditionInput | null > | null,
  or?: Array< ModelStoreCustomersConditionInput | null > | null,
  not?: ModelStoreCustomersConditionInput | null,
};

export type UpdateStoreCustomersInput = {
  id: string,
  storeId?: string | null,
  userId?: string | null,
};

export type DeleteStoreCustomersInput = {
  id: string,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  companyId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  storeId?: ModelIDInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  storeId?: ModelIDInput | null,
  companyId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  slug?: ModelStringInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelVariantFilterInput = {
  id?: ModelIDInput | null,
  productId?: ModelIDInput | null,
  sku?: ModelStringInput | null,
  soldByWeight?: ModelBooleanInput | null,
  price?: ModelFloatInput | null,
  salePrice?: ModelFloatInput | null,
  inventory?: ModelFloatInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelVariantFilterInput | null > | null,
  or?: Array< ModelVariantFilterInput | null > | null,
  not?: ModelVariantFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  number_1?: ModelStringInput | null,
  number_2?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userCartId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
  cartUserId?: ModelIDInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
};

export type ModelCartLineItemFilterInput = {
  variantId?: ModelIDInput | null,
  quantity?: ModelFloatInput | null,
  and?: Array< ModelCartLineItemFilterInput | null > | null,
  or?: Array< ModelCartLineItemFilterInput | null > | null,
  not?: ModelCartLineItemFilterInput | null,
  variantInCartLineItemsId?: ModelIDInput | null,
  cartLineItemsId?: ModelIDInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  customerId?: ModelIDInput | null,
  storeId?: ModelIDInput | null,
  receiptNumber?: ModelStringInput | null,
  receiptType?: ModelStringInput | null,
  orderDate?: ModelStringInput | null,
  loyverse?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelStoreCustomersFilterInput = {
  id?: ModelIDInput | null,
  storeId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelStoreCustomersFilterInput | null > | null,
  or?: Array< ModelStoreCustomersFilterInput | null > | null,
  not?: ModelStoreCustomersFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  companyId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  loyverse?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  storeId?: ModelSubscriptionIDInput | null,
  loyverse?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  storeId?: ModelSubscriptionIDInput | null,
  companyId?: ModelSubscriptionIDInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  slug?: ModelSubscriptionStringInput | null,
  loyverse?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionVariantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productId?: ModelSubscriptionIDInput | null,
  sku?: ModelSubscriptionStringInput | null,
  soldByWeight?: ModelSubscriptionBooleanInput | null,
  price?: ModelSubscriptionFloatInput | null,
  salePrice?: ModelSubscriptionFloatInput | null,
  inventory?: ModelSubscriptionFloatInput | null,
  loyverse?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVariantFilterInput | null > | null,
  or?: Array< ModelSubscriptionVariantFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  number_1?: ModelSubscriptionStringInput | null,
  number_2?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionCartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
};

export type ModelSubscriptionCartLineItemFilterInput = {
  variantId?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionCartLineItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartLineItemFilterInput | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  storeId?: ModelSubscriptionIDInput | null,
  receiptNumber?: ModelSubscriptionStringInput | null,
  receiptType?: ModelSubscriptionStringInput | null,
  orderDate?: ModelSubscriptionStringInput | null,
  loyverse?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type ModelSubscriptionStoreCustomersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  storeId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionStoreCustomersFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreCustomersFilterInput | null > | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    id: string,
    profile:  {
      __typename: "CompanyProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    id: string,
    profile:  {
      __typename: "CompanyProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    id: string,
    profile:  {
      __typename: "CompanyProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile:  {
      __typename: "StoreProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    type: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    customers?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile:  {
      __typename: "StoreProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    type: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    customers?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile:  {
      __typename: "StoreProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    type: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    customers?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      storeId: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    slug: string,
    variants?:  {
      __typename: "ModelVariantConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      storeId: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    slug: string,
    variants?:  {
      __typename: "ModelVariantConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      storeId: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    slug: string,
    variants?:  {
      __typename: "ModelVariantConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVariantMutationVariables = {
  input: CreateVariantInput,
  condition?: ModelVariantConditionInput | null,
};

export type CreateVariantMutation = {
  createVariant?:  {
    __typename: "Variant",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sku: string,
    soldByWeight: boolean,
    price?: number | null,
    salePrice?: number | null,
    inventory?: number | null,
    option_one?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_two?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_three?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    loyverse?: string | null,
    inCartLineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVariantMutationVariables = {
  input: UpdateVariantInput,
  condition?: ModelVariantConditionInput | null,
};

export type UpdateVariantMutation = {
  updateVariant?:  {
    __typename: "Variant",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sku: string,
    soldByWeight: boolean,
    price?: number | null,
    salePrice?: number | null,
    inventory?: number | null,
    option_one?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_two?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_three?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    loyverse?: string | null,
    inCartLineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVariantMutationVariables = {
  input: DeleteVariantInput,
  condition?: ModelVariantConditionInput | null,
};

export type DeleteVariantMutation = {
  deleteVariant?:  {
    __typename: "Variant",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sku: string,
    soldByWeight: boolean,
    price?: number | null,
    salePrice?: number | null,
    inventory?: number | null,
    option_one?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_two?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_three?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    loyverse?: string | null,
    inCartLineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    number_1?: string | null,
    number_2?: string | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?:  {
      __typename: "UserCustomer",
      id?: string | null,
      customer_code?: string | null,
      data?: string | null,
    } | null,
    orderedStores?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      cartUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCartId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    number_1?: string | null,
    number_2?: string | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?:  {
      __typename: "UserCustomer",
      id?: string | null,
      customer_code?: string | null,
      data?: string | null,
    } | null,
    orderedStores?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      cartUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCartId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    number_1?: string | null,
    number_2?: string | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?:  {
      __typename: "UserCustomer",
      id?: string | null,
      customer_code?: string | null,
      data?: string | null,
    } | null,
    orderedStores?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      cartUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCartId?: string | null,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    lineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cartUserId?: string | null,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    lineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cartUserId?: string | null,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    lineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cartUserId?: string | null,
  } | null,
};

export type CreateCartLineItemMutationVariables = {
  input: CreateCartLineItemInput,
  condition?: ModelCartLineItemConditionInput | null,
};

export type CreateCartLineItemMutation = {
  createCartLineItem?:  {
    __typename: "CartLineItem",
    variantId: string,
    variant?:  {
      __typename: "Variant",
      id: string,
      productId: string,
      sku: string,
      soldByWeight: boolean,
      price?: number | null,
      salePrice?: number | null,
      inventory?: number | null,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    variantInCartLineItemsId?: string | null,
    cartLineItemsId?: string | null,
  } | null,
};

export type UpdateCartLineItemMutationVariables = {
  input: UpdateCartLineItemInput,
  condition?: ModelCartLineItemConditionInput | null,
};

export type UpdateCartLineItemMutation = {
  updateCartLineItem?:  {
    __typename: "CartLineItem",
    variantId: string,
    variant?:  {
      __typename: "Variant",
      id: string,
      productId: string,
      sku: string,
      soldByWeight: boolean,
      price?: number | null,
      salePrice?: number | null,
      inventory?: number | null,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    variantInCartLineItemsId?: string | null,
    cartLineItemsId?: string | null,
  } | null,
};

export type DeleteCartLineItemMutationVariables = {
  input: DeleteCartLineItemInput,
  condition?: ModelCartLineItemConditionInput | null,
};

export type DeleteCartLineItemMutation = {
  deleteCartLineItem?:  {
    __typename: "CartLineItem",
    variantId: string,
    variant?:  {
      __typename: "Variant",
      id: string,
      productId: string,
      sku: string,
      soldByWeight: boolean,
      price?: number | null,
      salePrice?: number | null,
      inventory?: number | null,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    variantInCartLineItemsId?: string | null,
    cartLineItemsId?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    customer?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiptNumber: string,
    receiptType: string,
    orderDate: string,
    lineItems?:  Array< {
      __typename: "LineItem",
      productId: string,
      variantId: string,
      storeId: string,
      quantity: number,
      price: number,
      orginalPrice?: number | null,
    } | null > | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    customer?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiptNumber: string,
    receiptType: string,
    orderDate: string,
    lineItems?:  Array< {
      __typename: "LineItem",
      productId: string,
      variantId: string,
      storeId: string,
      quantity: number,
      price: number,
      orginalPrice?: number | null,
    } | null > | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    customer?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiptNumber: string,
    receiptType: string,
    orderDate: string,
    lineItems?:  Array< {
      __typename: "LineItem",
      productId: string,
      variantId: string,
      storeId: string,
      quantity: number,
      price: number,
      orginalPrice?: number | null,
    } | null > | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStoreCustomersMutationVariables = {
  input: CreateStoreCustomersInput,
  condition?: ModelStoreCustomersConditionInput | null,
};

export type CreateStoreCustomersMutation = {
  createStoreCustomers?:  {
    __typename: "StoreCustomers",
    id: string,
    storeId: string,
    userId: string,
    store:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStoreCustomersMutationVariables = {
  input: UpdateStoreCustomersInput,
  condition?: ModelStoreCustomersConditionInput | null,
};

export type UpdateStoreCustomersMutation = {
  updateStoreCustomers?:  {
    __typename: "StoreCustomers",
    id: string,
    storeId: string,
    userId: string,
    store:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStoreCustomersMutationVariables = {
  input: DeleteStoreCustomersInput,
  condition?: ModelStoreCustomersConditionInput | null,
};

export type DeleteStoreCustomersMutation = {
  deleteStoreCustomers?:  {
    __typename: "StoreCustomers",
    id: string,
    storeId: string,
    userId: string,
    store:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    id: string,
    profile:  {
      __typename: "CompanyProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile:  {
      __typename: "StoreProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    type: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    customers?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      storeId: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      storeId: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    slug: string,
    variants?:  {
      __typename: "ModelVariantConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVariantQueryVariables = {
  id: string,
};

export type GetVariantQuery = {
  getVariant?:  {
    __typename: "Variant",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sku: string,
    soldByWeight: boolean,
    price?: number | null,
    salePrice?: number | null,
    inventory?: number | null,
    option_one?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_two?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_three?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    loyverse?: string | null,
    inCartLineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVariantsQueryVariables = {
  filter?: ModelVariantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVariantsQuery = {
  listVariants?:  {
    __typename: "ModelVariantConnection",
    items:  Array< {
      __typename: "Variant",
      id: string,
      productId: string,
      sku: string,
      soldByWeight: boolean,
      price?: number | null,
      salePrice?: number | null,
      inventory?: number | null,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    number_1?: string | null,
    number_2?: string | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?:  {
      __typename: "UserCustomer",
      id?: string | null,
      customer_code?: string | null,
      data?: string | null,
    } | null,
    orderedStores?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      cartUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCartId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    lineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cartUserId?: string | null,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      cartUserId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCartLineItemQueryVariables = {
  id: string,
};

export type GetCartLineItemQuery = {
  getCartLineItem?:  {
    __typename: "CartLineItem",
    variantId: string,
    variant?:  {
      __typename: "Variant",
      id: string,
      productId: string,
      sku: string,
      soldByWeight: boolean,
      price?: number | null,
      salePrice?: number | null,
      inventory?: number | null,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    variantInCartLineItemsId?: string | null,
    cartLineItemsId?: string | null,
  } | null,
};

export type ListCartLineItemsQueryVariables = {
  filter?: ModelCartLineItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartLineItemsQuery = {
  listCartLineItems?:  {
    __typename: "ModelCartLineItemConnection",
    items:  Array< {
      __typename: "CartLineItem",
      variantId: string,
      quantity: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      variantInCartLineItemsId?: string | null,
      cartLineItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    customer?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiptNumber: string,
    receiptType: string,
    orderDate: string,
    lineItems?:  Array< {
      __typename: "LineItem",
      productId: string,
      variantId: string,
      storeId: string,
      quantity: number,
      price: number,
      orginalPrice?: number | null,
    } | null > | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      customerId: string,
      storeId: string,
      receiptNumber: string,
      receiptType: string,
      orderDate: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoreCustomersQueryVariables = {
  id: string,
};

export type GetStoreCustomersQuery = {
  getStoreCustomers?:  {
    __typename: "StoreCustomers",
    id: string,
    storeId: string,
    userId: string,
    store:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStoreCustomersQueryVariables = {
  filter?: ModelStoreCustomersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoreCustomersQuery = {
  listStoreCustomers?:  {
    __typename: "ModelStoreCustomersConnection",
    items:  Array< {
      __typename: "StoreCustomers",
      id: string,
      storeId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoresByCompanyQueryVariables = {
  companyId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetStoresByCompanyQuery = {
  getStoresByCompany?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoriesByStoreQueryVariables = {
  storeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCategoriesByStoreQuery = {
  getCategoriesByStore?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      storeId: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductsByStoreQueryVariables = {
  storeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetProductsByStoreQuery = {
  getProductsByStore?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductsByCompanyQueryVariables = {
  companyId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetProductsByCompanyQuery = {
  getProductsByCompany?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductsByCategoryQueryVariables = {
  categoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetProductsByCategoryQuery = {
  getProductsByCategory?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVariantsByProductQueryVariables = {
  productId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVariantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetVariantsByProductQuery = {
  getVariantsByProduct?:  {
    __typename: "ModelVariantConnection",
    items:  Array< {
      __typename: "Variant",
      id: string,
      productId: string,
      sku: string,
      soldByWeight: boolean,
      price?: number | null,
      salePrice?: number | null,
      inventory?: number | null,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrdersByUserQueryVariables = {
  customerId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetOrdersByUserQuery = {
  getOrdersByUser?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      customerId: string,
      storeId: string,
      receiptNumber: string,
      receiptType: string,
      orderDate: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrdersByStoreQueryVariables = {
  storeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetOrdersByStoreQuery = {
  getOrdersByStore?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      customerId: string,
      storeId: string,
      receiptNumber: string,
      receiptType: string,
      orderDate: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoreCustomersByStoreIdQueryVariables = {
  storeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoreCustomersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoreCustomersByStoreIdQuery = {
  storeCustomersByStoreId?:  {
    __typename: "ModelStoreCustomersConnection",
    items:  Array< {
      __typename: "StoreCustomers",
      id: string,
      storeId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StoreCustomersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStoreCustomersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StoreCustomersByUserIdQuery = {
  storeCustomersByUserId?:  {
    __typename: "ModelStoreCustomersConnection",
    items:  Array< {
      __typename: "StoreCustomers",
      id: string,
      storeId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    id: string,
    profile:  {
      __typename: "CompanyProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    id: string,
    profile:  {
      __typename: "CompanyProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    id: string,
    profile:  {
      __typename: "CompanyProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    stores?:  {
      __typename: "ModelStoreConnection",
      nextToken?: string | null,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile:  {
      __typename: "StoreProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    type: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    customers?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile:  {
      __typename: "StoreProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    type: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    customers?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    profile:  {
      __typename: "StoreProfile",
      name: string,
      email?: string | null,
      phone?: string | null,
    },
    type: string,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    customers?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      storeId: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    slug: string,
    variants?:  {
      __typename: "ModelVariantConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      storeId: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    slug: string,
    variants?:  {
      __typename: "ModelVariantConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    companyId: string,
    company?:  {
      __typename: "Company",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    categoryId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      storeId: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    slug: string,
    variants?:  {
      __typename: "ModelVariantConnection",
      nextToken?: string | null,
    } | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVariantSubscriptionVariables = {
  filter?: ModelSubscriptionVariantFilterInput | null,
};

export type OnCreateVariantSubscription = {
  onCreateVariant?:  {
    __typename: "Variant",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sku: string,
    soldByWeight: boolean,
    price?: number | null,
    salePrice?: number | null,
    inventory?: number | null,
    option_one?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_two?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_three?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    loyverse?: string | null,
    inCartLineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVariantSubscriptionVariables = {
  filter?: ModelSubscriptionVariantFilterInput | null,
};

export type OnUpdateVariantSubscription = {
  onUpdateVariant?:  {
    __typename: "Variant",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sku: string,
    soldByWeight: boolean,
    price?: number | null,
    salePrice?: number | null,
    inventory?: number | null,
    option_one?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_two?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_three?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    loyverse?: string | null,
    inCartLineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVariantSubscriptionVariables = {
  filter?: ModelSubscriptionVariantFilterInput | null,
};

export type OnDeleteVariantSubscription = {
  onDeleteVariant?:  {
    __typename: "Variant",
    id: string,
    productId: string,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      storeId: string,
      companyId: string,
      categoryId?: string | null,
      slug: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sku: string,
    soldByWeight: boolean,
    price?: number | null,
    salePrice?: number | null,
    inventory?: number | null,
    option_one?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_two?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    option_three?:  {
      __typename: "VariantOption",
      name: string,
      value: string,
    } | null,
    loyverse?: string | null,
    inCartLineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    number_1?: string | null,
    number_2?: string | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?:  {
      __typename: "UserCustomer",
      id?: string | null,
      customer_code?: string | null,
      data?: string | null,
    } | null,
    orderedStores?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      cartUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCartId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    number_1?: string | null,
    number_2?: string | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?:  {
      __typename: "UserCustomer",
      id?: string | null,
      customer_code?: string | null,
      data?: string | null,
    } | null,
    orderedStores?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      cartUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCartId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    number_1?: string | null,
    number_2?: string | null,
    address?:  {
      __typename: "Address",
      addressLine1?: string | null,
      addressLine2?: string | null,
      country?: string | null,
      region?: string | null,
      regionCode?: string | null,
      state?: string | null,
      stateCode?: string | null,
      city?: string | null,
      cityCode?: string | null,
      barangay?: string | null,
      barangayCode?: string | null,
      zipCode?: string | null,
    } | null,
    loyverse?:  {
      __typename: "UserCustomer",
      id?: string | null,
      customer_code?: string | null,
      data?: string | null,
    } | null,
    orderedStores?:  {
      __typename: "ModelStoreCustomersConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    cart?:  {
      __typename: "Cart",
      id: string,
      createdAt: string,
      updatedAt: string,
      cartUserId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userCartId?: string | null,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    lineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cartUserId?: string | null,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    lineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cartUserId?: string | null,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    lineItems?:  {
      __typename: "ModelCartLineItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cartUserId?: string | null,
  } | null,
};

export type OnCreateCartLineItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartLineItemFilterInput | null,
};

export type OnCreateCartLineItemSubscription = {
  onCreateCartLineItem?:  {
    __typename: "CartLineItem",
    variantId: string,
    variant?:  {
      __typename: "Variant",
      id: string,
      productId: string,
      sku: string,
      soldByWeight: boolean,
      price?: number | null,
      salePrice?: number | null,
      inventory?: number | null,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    variantInCartLineItemsId?: string | null,
    cartLineItemsId?: string | null,
  } | null,
};

export type OnUpdateCartLineItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartLineItemFilterInput | null,
};

export type OnUpdateCartLineItemSubscription = {
  onUpdateCartLineItem?:  {
    __typename: "CartLineItem",
    variantId: string,
    variant?:  {
      __typename: "Variant",
      id: string,
      productId: string,
      sku: string,
      soldByWeight: boolean,
      price?: number | null,
      salePrice?: number | null,
      inventory?: number | null,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    variantInCartLineItemsId?: string | null,
    cartLineItemsId?: string | null,
  } | null,
};

export type OnDeleteCartLineItemSubscriptionVariables = {
  filter?: ModelSubscriptionCartLineItemFilterInput | null,
};

export type OnDeleteCartLineItemSubscription = {
  onDeleteCartLineItem?:  {
    __typename: "CartLineItem",
    variantId: string,
    variant?:  {
      __typename: "Variant",
      id: string,
      productId: string,
      sku: string,
      soldByWeight: boolean,
      price?: number | null,
      salePrice?: number | null,
      inventory?: number | null,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    quantity: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    variantInCartLineItemsId?: string | null,
    cartLineItemsId?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    customer?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiptNumber: string,
    receiptType: string,
    orderDate: string,
    lineItems?:  Array< {
      __typename: "LineItem",
      productId: string,
      variantId: string,
      storeId: string,
      quantity: number,
      price: number,
      orginalPrice?: number | null,
    } | null > | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    customer?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiptNumber: string,
    receiptType: string,
    orderDate: string,
    lineItems?:  Array< {
      __typename: "LineItem",
      productId: string,
      variantId: string,
      storeId: string,
      quantity: number,
      price: number,
      orginalPrice?: number | null,
    } | null > | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    customerId: string,
    customer?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    } | null,
    storeId: string,
    store?:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiptNumber: string,
    receiptType: string,
    orderDate: string,
    lineItems?:  Array< {
      __typename: "LineItem",
      productId: string,
      variantId: string,
      storeId: string,
      quantity: number,
      price: number,
      orginalPrice?: number | null,
    } | null > | null,
    loyverse?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStoreCustomersSubscriptionVariables = {
  filter?: ModelSubscriptionStoreCustomersFilterInput | null,
};

export type OnCreateStoreCustomersSubscription = {
  onCreateStoreCustomers?:  {
    __typename: "StoreCustomers",
    id: string,
    storeId: string,
    userId: string,
    store:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStoreCustomersSubscriptionVariables = {
  filter?: ModelSubscriptionStoreCustomersFilterInput | null,
};

export type OnUpdateStoreCustomersSubscription = {
  onUpdateStoreCustomers?:  {
    __typename: "StoreCustomers",
    id: string,
    storeId: string,
    userId: string,
    store:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStoreCustomersSubscriptionVariables = {
  filter?: ModelSubscriptionStoreCustomersFilterInput | null,
};

export type OnDeleteStoreCustomersSubscription = {
  onDeleteStoreCustomers?:  {
    __typename: "StoreCustomers",
    id: string,
    storeId: string,
    userId: string,
    store:  {
      __typename: "Store",
      id: string,
      companyId: string,
      type: string,
      loyverse?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      number_1?: string | null,
      number_2?: string | null,
      createdAt: string,
      updatedAt: string,
      userCartId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
