import { useMutation } from "@apollo/client";
import * as React from "react";
import Error from "../../../../components/error/error.component";
import { UPDATE_STATUS } from "../../order.graphql";
import { OrderData, UpdateStatusVars } from "../../order.type";

interface Props {
  orderID: string;
  status: "OPEN" | "IN_PROGRESS" | "COMPLETE";
}

const TransitionButton: React.FC<Props> = ({ orderID, status }) => {
  const [updateStatus, { loading, error }] = useMutation<OrderData, UpdateStatusVars>(
    UPDATE_STATUS
  );

  function getNextStatus(current: string): "IN_PROGRESS" | "COMPLETE" {
    if (current == "OPEN") return "IN_PROGRESS";
    if (current == "IN_PROGRESS") return "COMPLETE";
    return "COMPLETE";
  }

  async function handleClick(): Promise<void> {
    await updateStatus({
      variables: {
        orderID,
        status: status == "OPEN" ? "IN_PROGRESS" : status == "IN_PROGRESS" ? "COMPLETE" : "COMPLETE"
      }
    });
  }

  return (
    <React.Fragment>
      <button
        title={`Set to ${getNextStatus(status)}`}
        disabled={status == "COMPLETE" || loading}
        onClick={handleClick}
        id="status">
        {`${status != "COMPLETE" ? "Mark as" : ""} ${getNextStatus(status)}`}
      </button>

      <div id="status-error">{error && <Error message={error?.message} error={error} />}</div>
    </React.Fragment>
  );
};

export default TransitionButton;
