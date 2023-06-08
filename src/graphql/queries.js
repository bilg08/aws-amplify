/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($email: String!) {
    getCustomer(email: $email) {
      email
      username
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $email: String
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCustomers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($customerEmail: String!, $createdAt: AWSDateTime!) {
    getOrder(customerEmail: $customerEmail, createdAt: $createdAt) {
      customerEmail
      createdAt
      orderId
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $customerEmail: String
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      customerEmail: $customerEmail
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        customerEmail
        createdAt
        orderId
        updatedAt
      }
      nextToken
    }
  }
`;
