import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query getOrders($offset: Int, $limit: Int) {
    orders(offset: $offset, limit: $limit) {
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
