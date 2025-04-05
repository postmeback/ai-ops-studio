import React from "react";
import { useEffect, useState } from "react";
import DeploymentCard from "./deploymentcards";

interface Deployment {
  id: string;
  name: string;
  status: "Running" | "Stopped" | "Failed";
  createdAt: string;
}

const dummyDeployments: Deployment[] = [
  {
    id: "1",
    name: "Text Summarizer API",
    status: "Running",
    createdAt: "2025-04-01",
  },
  {
    id: "2",
    name: "Image Classifier V2",
    status: "Stopped",
    createdAt: "2025-03-28",
  },
  {
    id: "3",
    name: "Anomaly Detector",
    status: "Failed",
    createdAt: "2025-03-30",
  },
];

const DeploymentsPage = () => {
  const [deployments, setDeployments] = useState<Deployment[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setDeployments(dummyDeployments);
    }, 300);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-2">Deployments</h2>
      <p className="text-gray-500 mb-6">Manage and monitor your AI app deployments.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {deployments.map((deployment) => (
          <DeploymentCard key={deployment.id} deployment={deployment} />
        ))}
      </div>
    </div>
  );
};

export default DeploymentsPage;
