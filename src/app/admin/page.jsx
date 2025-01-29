'use client'; 

import Sidebar from "@/src/components/Admin/Sidebar";
import { useState } from "react";
import AddNewProduct from "@/src/components/Admin/AddNewProduct";
import ModifyProduct from "@/src/components/Admin/ModifyProduct";
import AddNewItem from "@/src/components/Admin/AddNewItem";
import ViewContacts from "@/src/components/Admin/ViewContacts";
import ViewBookedProducts from "@/src/components/Admin/ViewBookedProducts";

export default function AdminPage() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleSelect = (component) => {
    setActiveComponent(component); 
  };

  return (
    <div className="flex">
      <Sidebar onSelect={handleSelect} activeComponent={activeComponent} />

      <div className="flex-1 p-4">
        {activeComponent === "AddNewProduct" && <AddNewProduct />}
        {activeComponent === "ModifyProduct" && <ModifyProduct />}
        {activeComponent === "AddNewItem" && <AddNewItem />}
        {activeComponent === "ViewContacts" && <ViewContacts />}
        {activeComponent === "ViewBookedProducts" && <ViewBookedProducts />}
      </div>
    </div>
  );
}
