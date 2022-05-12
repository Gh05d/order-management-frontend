import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query getOrders($limit: Int) {
    orders(limit: $limit) {
      _id
      state
      created
      updated
      employee {
        _id
        firstName
        lastName
      }
      customer {
        _id
        firstName
        lastName
      }
      items {
        quantity
        product {
          _id
          name
        }
      }
    }
  }
`;
