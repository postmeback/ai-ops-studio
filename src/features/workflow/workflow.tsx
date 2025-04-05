import { useEffect, useState } from "react";

interface Workflow {
  id: string;
  name: string;
  status: "Active" | "Paused" | "Error";
  updatedAt: string;
}

const dummyWorkflows: Workflow[] = [
  { id: "w1", name: "Auto Retrain NLP", status: "Active", updatedAt: "2025-04-04" },
  { id: "w2", name: "Daily Model Export", status: "Paused", updatedAt: "2025-03-30" },
  { id: "w3", name: "API Monitor", status: "Error", updatedAt: "2025-03-28" },
];

const Workflows = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setWorkflows(dummyWorkflows);
    }, 300);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-2">Workflows</h2>
      <p className="text-gray-500 mb-6">Create and manage automation workflows for your AI pipelines.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {workflows.map((wf) => (
          <div key={wf.id} className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-1">{wf.name}</h3>
            <p className={`text-sm mb-1 ${wf.status === "Active" ? "text-green-600" : wf.status === "Paused" ? "text-yellow-600" : "text-red-600"}`}>
              {wf.status}
            </p>
            <p className="text-xs text-gray-400">Last updated: {wf.updatedAt}</p>
            <div className="mt-4 d-flex gap-2">
              <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">Edit</button>
              <button className="px-3 py-1 text-sm border rounded hover:bg-gray-100">Run</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;
