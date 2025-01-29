'use client'; // Make this a Client Component

import React from "react";

const Sidebar = ({ onSelect, activeComponent }) => {
  return (
    <div className="bg-gray-800 text-white h-screen p-4 w-64">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <button
            className={`w-full text-left p-2 hover:bg-gray-700 rounded ${
              activeComponent === "AddNewProduct" ? "bg-gray-700" : ""
            }`}
            onClick={() => onSelect("AddNewProduct")}
          >
            Add New Product
          </button>
        </li>
        <li>
          <button
            className={`w-full text-left p-2 hover:bg-gray-700 rounded ${
              activeComponent === "ModifyProduct" ? "bg-gray-700" : ""
            }`}
            onClick={() => onSelect("ModifyProduct")}
          >
            Modify Product
          </button>
        </li>
        <li>
          <button
            className={`w-full text-left p-2 hover:bg-gray-700 rounded ${
              activeComponent === "AddNewItem" ? "bg-gray-700" : ""
            }`}
            onClick={() => onSelect("AddNewItem")}
          >
            Add New Item
          </button>
        </li>
        <li>
          <button
            className={`w-full text-left p-2 hover:bg-gray-700 rounded ${
              activeComponent === "ViewContacts" ? "bg-gray-700" : ""
            }`}
            onClick={() => onSelect("ViewContacts")}
          >
            View Contacts
          </button>
        </li>
        <li>
          <button
            className={`w-full text-left p-2 hover:bg-gray-700 rounded ${
              activeComponent === "ViewBookedProducts" ? "bg-gray-700" : ""
            }`}
            onClick={() => onSelect("ViewBookedProducts")}
          >
            View Booked Products
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
