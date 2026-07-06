/* eslint-disable react-refresh/only-export-components */
// import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { createContext } from "react";

import ParentContext from "./components/Props/UseContext/ParentContext";

// import Products from "./components/routing/Products";
// import AboutUs from "./components/routing/AboutUs";
// import Clothes from "./components/routing/Clothes";
// import Contact from "./components/routing/Contact";
// import Laptop from "./components/routing/Laptop";
// import Home from "./components/routing/Home";
// import User from "./components/routing/User";


export const UserContext = createContext();
export const UserObjContext = createContext();

function App() {

  //useContext ex : App.jsx -> ParentContext.jsx -> ChildContext.jsx -> GrandChildContext.jsx
  // we will use this user value into the grandchild component without passing it as props.
  const user = "devbhatt";
  const userObj={
    name:"devbhatt",
    email:"bhatt@gmail.com",
    phone:1234567890
  }

  return(
    <>
      <UserContext.Provider value={user}>
        <UserObjContext.Provider value={userObj}>
          <ParentContext />
        </UserObjContext.Provider>
      </UserContext.Provider>
    </>
  );


  //map method example
  //const items = [1, 2, 3, 4, 5];
  // const renderedItems = items.map((item)=> {
  //     return <h3>{item}</h3>
  // })

  // return <>
  //     {renderedItems}
  // </>

  // constional rendrring use case
  // const isLoggedIn = false;
  // return <>
  //     {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
  // </>

  //   function msg() {
  //     console.log("Hello from App component");
  //   }

    // <BrowserRouter>
    //   <nav>
    //     <NavLink
    //       to="/"
    //       style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
    //     >
    //       Home
    //     </NavLink>{" "}
    //     | {"  "}
    //     <NavLink
    //       to="/about"
    //       style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
    //     >
    //       About
    //     </NavLink>{" "}
    //     | {"  "}
    //     <NavLink
    //       to="/contact"
    //       style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
    //     >
    //       Contact
    //     </NavLink>{" "}
    //     | {"  "}
    //     <NavLink
    //       to="/user"
    //       style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
    //     >
    //       User
    //     </NavLink>
    //     | {"  "}
    //     <NavLink
    //       to="/products"
    //       style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
    //     >
    //       Products
    //     </NavLink>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<AboutUs />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/user" element={<User />} />
    //     <Route path="/user/:id" element={<User />} />
    //     <Route path="*" element={<h1>404 Not Found</h1>} />

    //     <Route path="/products" element={<Products />}>
    //       <Route path="clothes" element={<Clothes />} />
    //       <Route path="laptop" element={<Laptop />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
}
export default App;
