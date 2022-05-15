import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query getOrders($offset: Int, $limit: Int) {
    orders(offset: $offset, limit: $limit) {
      _id
      status
      createdAt
      updatedAt
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
    }
  }
`;
