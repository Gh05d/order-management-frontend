import { useQuery, useMutation } from "@apollo/client";
import * as React from "react";
import { GET_EMPLOYEES, ASSIGN_EMPLOYEE } from "../../order.graphql";
import { AssignEmployeeVars, EmployeeData, OrderData } from "../../order.type";

interface Props {
  orderID: string;
}

const SelectEmployee: React.FC<Props> = ({ orderID }) => {
  const { loading, error, data } = useQuery<EmployeeData, {}>(GET_EMPLOYEES);
  const [assignEmployee, { loading: l2, error: e2 }] = useMutation<OrderData, AssignEmployeeVars>(
    ASSIGN_EMPLOYEE
  );

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>): Promise<void> {
    const employeeID = e?.target?.value;
    await assignEmployee({ variables: { orderID, employeeID } });
  }

  return (
    <select id="employee-select" disabled={loading || l2 || !data} onChange={handleChange}>
      <option>
        {error || e2 ? "Something went wrong" : loading || l2 ? "Assigning..." : "Assign Employee"}
      </option>

      {(!loading || !l2) &&
        data?.employees.map(employee => (
          <option
            value={employee._id}
            key={employee._id}>{`${employee.firstName} ${employee.lastName}`}</option>
        ))}
    </select>
  );
};

export default SelectEmployee;
