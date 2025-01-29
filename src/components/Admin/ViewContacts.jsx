import React, { useEffect, useState } from 'react';

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts from the backend API
    fetch('/api/contacts')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">View Contacts</h1>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact.id} className="border p-4 rounded">
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Message:</strong> {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewContacts;
