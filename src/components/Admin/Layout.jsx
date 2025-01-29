import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AddNewProduct from './AddNewProduct';
import ModifyProduct from './ModifyProduct';
import AddNewItem from './AddNewItem';
import ViewContacts from './ViewContacts';
import ViewBookedProducts from './ViewBookedProducts';

const AdminLayout = () => {
  const [activeComponent, setActiveComponent] = useState('add-new-product');

  const renderContent = () => {
    switch (activeComponent) {
      case 'add-new-product':
        return <AddNewProduct />;
      case 'modify-product':
        return <ModifyProduct />;
      case 'add-new-item':
        return <AddNewItem />;
      case 'view-contacts':
        return <ViewContacts />;
      case 'view-booked-products':
        return <ViewBookedProducts />;
      default:
        return <AddNewProduct />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onSelect={setActiveComponent} />
      <main className="flex-grow p-6">{renderContent()}</main>
    </div>
  );
};

export default AdminLayout;
