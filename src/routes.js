/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Stores from "views/examples/stores";
import Customers from "views/examples/customers";
import Categories from "views/examples/categories";
import Products from "views/examples/products";
import Orders from "views/examples/orders";
import Validation from "views/examples/Validation";
import Registrations from "views/examples/registrations";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "chart.png",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/stores",
    name: "Partner Stores",
    icon: "cart.png",
    component: Stores,
    layout: "/admin"
  },

  {
    path: "/customers",
    name: "Customers",
    icon: "person.png",
    component: Customers,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "courier.png",
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "neuron.png",
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: "fruits.png",
    component: Products,
    layout: "/admin"
  },
  {
    path: "/Registrations",
    name: "Registrations",
    icon: "patient.png",
    component: Registrations,
    layout: "/admin"
  },
  {
    path: "/validation",
    name: "Validation",
    icon: "history.png",
    component: Validation,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
  
    component: Register,
    layout: "/auth"
  }
];
export default routes;
