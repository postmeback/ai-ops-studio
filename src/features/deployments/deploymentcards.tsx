import { useState } from "react";

interface DeploymentCardProps {
  deployment: {
    id: string;
    name: string;
    status: "Running" | "Stopped" | "Failed";
    createdAt: string;
  };
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Running":
      return "text-success";
    case "Stopped":
      return "text-muted";
    case "Failed":
      return "text-danger";
    default:
      return "";
  }
};

const DeploymentCard = ({ deployment }: DeploymentCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="border border-light rounded p-4 shadow-sm bg-white">
        <h3 className="fs-5 fw-semibold mb-1">{deployment.name}</h3>
        <p className={`mb-2 ${getStatusColor(deployment.status)}`}>
          Status: {deployment.status}
        </p>
        <p className="text-muted small">Created: {deployment.createdAt}</p>
        <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={handleViewClick}
          >
            View
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            disabled={deployment.status === "Stopped" || deployment.status === "Failed"}
          >
            Stop
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            disabled={deployment.status === "Running"}
          >
            Delete
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal d-block" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Deployment Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div className="modal-body">
                <p>You should see the details here</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeploymentCard;
