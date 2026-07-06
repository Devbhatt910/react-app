import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <nav>
        <NavLink to="clothes">Clothes</NavLink> | {" "}
        <NavLink to="laptop">Laptop</NavLink>
      </nav>


      <Outlet />
    </>
  )
}

export default Products