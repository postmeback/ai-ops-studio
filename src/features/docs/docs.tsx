
const DocsPage = () => {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Documentation & Help</h2>
        <p className="text-gray-600 mb-6">
          Find guides, FAQs, and resources to help you build and manage your AI Ops workflows.
        </p>
  
        <div className="space-y-6">
          <section className="bg-white shadow rounded p-6">
            <h3 className="text-lg font-medium mb-2">Getting Started</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>How to deploy your first workflow</li>
              <li>Understanding environments and configs</li>
              <li>Using the visual editor</li>
            </ul>
          </section>
  
          <section className="bg-white shadow rounded p-6">
            <h3 className="text-lg font-medium mb-2">Common Issues</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Builds not triggering</li>
              <li>API key access problems</li>
              <li>Workflow stuck in "Pending" state</li>
            </ul>
          </section>
  
          <section className="bg-white shadow rounded p-6">
            <h3 className="text-lg font-medium mb-2">Still Need Help?</h3>
            <p className="text-sm text-gray-700">
              Reach out to our support team at <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>.
            </p>
          </section>
        </div>
      </div>
    );
  };
  
  export default DocsPage;
  