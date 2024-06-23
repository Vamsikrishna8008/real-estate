"use client";
import { getAllDetails } from "@/lib/dbOperations";
import { UsersType } from "@/lib/types";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<UsersType[]>([]);
  const fetchUsers = async () => {
    const data = await getAllDetails({ uri: "/admin/users" });
    setUsers(data);
  };
  console.log(users, "lllllll");
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">S.No</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Phone</th>
              <th className="px-4 py-2 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{i + 1}</td>
                <td className="px-4 py-2 border-b">{item.name}</td>
                <td className="px-4 py-2 border-b">{item.phone}</td>
                <td className="px-4 py-2 border-b">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
