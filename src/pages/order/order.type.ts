export interface OrderData {
  order: Order;
}

export interface OrderVars {
  id: string;
}

interface Employee extends EmployeeShort {
  updatedAt?: string;
  createdAt: string;
  email: string;
  employeeNumber: number;
}

export interface EmployeeData {
  employees: Employee[];
}

export interface AssignEmployeeVars {
  orderID: string;
  employeeID: string;
}

export interface UpdateStatusVars {
  orderID: string;
  status: "IN_PROGRESS" | "COMPLETE";
}

interface HistoryStatus {
  _id: string;
  status: "OPEN" | "IN_PROGRESS" | "COMPLETE";
  createdAt: string;
}
export interface HistoryStatusData {
  orderStatusHistory: HistoryStatus[];
}

export interface FetchHistoryVars {
  orderID: string;
}
