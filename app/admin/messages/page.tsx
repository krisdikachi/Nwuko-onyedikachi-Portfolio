"use client"
import React, { useEffect, useState } from 'react';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch('/api/messages');
        const data = await res.json();
        if (res.ok) {
          setMessages(data.messages);
        } else {
          setError(data.error || 'Failed to fetch messages');
        }
      } catch (err) {
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {!loading && !error && messages.length === 0 && (
        <div>No messages found.</div>
      )}
      {!loading && !error && messages.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border bg-card rounded-lg">
            <thead>
              <tr className="bg-secondary">
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">Message</th>
                <th className="py-2 px-4 border-b text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(msg => (
                <tr key={msg.id} className="hover:bg-secondary/30">
                  <td className="py-2 px-4 border-b align-top font-medium">{msg.name}</td>
                  <td className="py-2 px-4 border-b align-top text-blue-700 underline"><a href={`mailto:${msg.email}`}>{msg.email}</a></td>
                  <td className="py-2 px-4 border-b align-top whitespace-pre-line">{msg.message}</td>
                  <td className="py-2 px-4 border-b align-top text-xs text-muted-foreground">{new Date(msg.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 