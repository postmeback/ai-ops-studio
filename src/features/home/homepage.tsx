import  { useState } from "react";

const deployments = [
  {
    id: "1",
    name: "gpt-4-model",
    status: "Running",
    time: "2 mins ago",
  },
  {
    id: "2",
    name: "winter-model",
    status: "Failed",
    time: "1 hour ago",
  },
  {
    id: "3",
    name: "llama-2-13b",
    status: "Queued",
    time: "5 hours ago",
  },
];

const statusVariant = (status: string) => {
  switch (status) {
    case "Running":
      return "bg-success";
    case "Failed":
      return "bg-danger";
    case "Queued":
      return "bg-warning text-dark";
    default:
      return "bg-secondary";
  }
};

const HomePage = () => {
  const [showDeployModal, setShowDeployModal] = useState(false);
  const [showApiModal, setShowApiModal] = useState(false);

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
        <div>
          <h2>Hello, Dev</h2>
          <p className="text-muted">Welcome to your AI Ops Studio</p>
        </div>
        <div className="mt-3 mt-md-0">
          <button
            className="btn btn-primary me-2"
            onClick={() => setShowDeployModal(true)}
          >
            Deploy Model
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setShowApiModal(true)}
          >
            View API Keys
          </button>
        </div>
      </div>

      {/* Recent Deployments */}
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Recent Deployments</h5>
        </div>
        <ul className="list-group list-group-flush">
          {deployments.map((deploy) => (
            <li
              key={deploy.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <div className="fw-semibold">{deploy.name}</div>
                <small className="text-muted">{deploy.time}</small>
              </div>
              <span className={`badge ${statusVariant(deploy.status)}`}>
                {deploy.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Deploy Modal */}
      {showDeployModal && (
        <div className="modal d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Deploy Model</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeployModal(false)}
                />
              </div>
              <div className="modal-body">
                <p>Enter your model details here.</p>
                <input type="text" className="form-control mb-2" placeholder="Model Name" />
                <textarea className="form-control" placeholder="Model Description" />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowDeployModal(false)}>Close</button>
                <button className="btn btn-primary">Deploy</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* API Keys Modal */}
      {showApiModal && (
        <div className="modal d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your API Keys</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowApiModal(false)}
                />
              </div>
              <div className="modal-body">
                <p>Your keys will appear here...</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowApiModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
