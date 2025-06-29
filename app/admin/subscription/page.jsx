'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmailListingPage = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmails = async () => {
    try {
      const res = await axios.get('/api/email');
      setEmails(res.data.emails || []);
    } catch (error) {
      console.error('❌ Error fetching emails:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">Subscribed Emails</h1>

      <div className="relative max-h-[80vh] max-w-full overflow-x-auto overflow-y-auto border border-gray-300 rounded-lg shadow-sm">
        <table className="w-full text-sm text-left text-gray-800">
          <thead className="text-xs uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Email Address</th>
              <th className="px-6 py-3">Subscribed On</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : emails.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center">
                  No subscribed emails found.
                </td>
              </tr>
            ) : (
              emails.map((email, index) => (
                <tr key={email._id} className="bg-white border-b">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{email.email}</td>
                  <td className="px-6 py-4">{new Date(email.date).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailListingPage;
