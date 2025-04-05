import React from 'react';
import { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState("user@example.com");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [apiKey] = useState("sk-1234-XXXX-XXXX");

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      <div className="space-y-8">
        {/* User Preferences */}
        <section className="bg-white shadow rounded p-6">
          <h3 className="text-lg font-medium mb-2">User Preferences</h3>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
        </section>

        <section className="bg-white shadow rounded p-6">
          <h3 className="text-lg font-medium mb-2">Notifications</h3>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              id="notify"
            />
            <label htmlFor="notify" className="text-sm">
              Enable email notifications
            </label>
          </div>
        </section>


        <section className="bg-white shadow rounded p-6">
          <h3 className="text-lg font-medium mb-2">API Key</h3>
          <p className="font-mono bg-gray-100 p-2 rounded">{apiKey}</p>
          <button className="mt-2 text-sm text-blue-600 hover:underline">
            Regenerate
          </button>
        </section>
      </div>
    </div>
  );
};

export default Settings;
