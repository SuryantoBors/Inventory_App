import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./login.jsx";
import Dashboard from "./dashboard.jsx";
import CreateItem from "./createItem.jsx";
import ItemDetails from "./itemDetails";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/addProduct' element={<CreateItem />} />
        <Route path='/viewProduct/:itemID' element={<ItemDetails />} />
        <Route path='/editProduct/:itemID' element={<ItemDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
