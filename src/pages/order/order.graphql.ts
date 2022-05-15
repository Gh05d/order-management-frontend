import { gql } from "@apollo/client";

export const GET_ORDER = gql`
  query getOrder($id: ID!) {
    order(id: $id) {
      _id
      status
      totalPrice
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
      address {
        street
        zip
        city
        country
        misc
      }
      items {
        quantity
        product {
          _id
          name
          image
          description
        }
      }
    }
  }
`;

export const GET_EMPLOYEES = gql`
  query getEmployees {
    employees {
      _id
      firstName
      lastName
    }
  }
`;

export const ASSIGN_EMPLOYEE = gql`
  mutation onAssignEmployee($orderID: ID!, $employeeID: ID!) {
    assignEmployee(orderID: $orderID, employeeID: $employeeID) {
      _id
      employee {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const UPDATE_STATUS = gql`
  mutation onUpdateStatus($orderID: ID!, $status: String!) {
    updateStatus(orderID: $orderID, status: $status) {
      _id
      status
    }
  }
`;

export const FETCH_HISTORY = gql`
  query onFetchHistory($orderID: ID!) {
    orderStatusHistory(orderID: $orderID) {
      _id
      status
      createdAt
    }
  }
`;
