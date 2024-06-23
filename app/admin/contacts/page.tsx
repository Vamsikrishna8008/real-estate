"use client";
import { getAllDetails } from "@/lib/dbOperations";
import { ContactTypes } from "@/lib/types";
import React, { useEffect, useState } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState<ContactTypes[]>([]);
  const fetchContacts = async () => {
    const data = await getAllDetails({ uri: "/admin/contact" });
    setContacts(data);
  };
  console.log(contacts, "lllllll");
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">S.No</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{i + 1}</td>
                <td className="px-4 py-2 border-b">{contact.name}</td>
                <td className="px-4 py-2 border-b">{contact.number}</td>
                <td className="px-4 py-2 border-b">{contact.contact_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
