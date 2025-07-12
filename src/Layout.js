import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (

<div className="topnav">
   <nav>
    <Link className="active" to="/">Home</Link>
  <a href="#news">Company List</a>
  <a href="#contact">Product List</a>
  <a href="#about">New Product</a>
   <Link to="/blogs">Blog</Link>
  </nav>
   <Outlet />
</div>
  )
}
export default Layout;