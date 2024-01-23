import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUP";
import CreateCategory from "./screens/createcategory/CreateCategory";
import CreateEmployee from "./screens/createemployee/CreateEmployee";
import CreateInvoice from "./screens/createinvoice/CreateInvoice";
import CreateProduct from "./screens/createproduct/CreateProduct";
import Dashboard from "./screens/dashboard/Dashboard";
import EmployeeTable from "./screens/employee/EmployeeTable";
import InvoiceTable from "./screens/invoice/InvoiceTable";
import NewInvoice from "./screens/newinvoice/NewInvoice";
import ProductTable from "./screens/productList/ProductTable";
import ProductCategory from "./screens/productcategory/CategoryTable";
import ShopOwnerDetails from "./screens/shop/ShopOwnerDetails";
import UserProfile from "./screens/shop/UserProfile";
import CategoryView from "./views/CategoryView";
import EmployeeView from "./views/Employeevew";
import InvoiceView from "./views/InvoiceView";
import ProductView from "./views/productview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/EmployeeTable" element={<EmployeeTable />} />
          <Route path="/ProductCategory" element={<ProductCategory />} />
          <Route path="/ProductTable" element={<ProductTable />} />
          <Route path="/InvoiceTable" element={<InvoiceTable />} />
          <Route path="/CreateEmployee" element={<CreateEmployee />} />
          <Route path="/CreateProduct" element={<CreateProduct />} />
          <Route path="/CreateCategory" element={<CreateCategory />} />
          <Route path="/CreateInvoice" element={<CreateInvoice />} />
          <Route path="/NewInvoice" element={<NewInvoice />} />
          <Route path="/Dashboard" element={<Dashboard />} />

          <Route path="SignUp" element={<SignUp />} />
          <Route path="ProductView" element={<ProductView />} />
          <Route path="EmployeeView" element={<EmployeeView />} />
          <Route path="CategoryView" element={<CategoryView />} />
          <Route path="InvoiceView" element={<InvoiceView />} />
          <Route path="/ShopOwnerDetails" element={<ShopOwnerDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
 import React from "react";
import NewInvoice from "./screens/newinvoice/NewInvoice";
import NewInvoice1 from "./screens/newinvoice/NewInvoice1";


function App() {
  return (
    <>
      <NewInvoice />
    </>
  );
}
export default App; */
