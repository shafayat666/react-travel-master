import { Link } from "react-router-dom";
import { MdCardTravel } from "react-icons/md";

const NavBar = () => {
  const lists = <>
    <Link className="mr-5" to={"/news"}>News</Link>
    <Link className="mr-5" to={"/destination"}>Destination</Link>
    <Link className="mr-5" to={"/blog"}>Blog</Link>
    <Link className="mr-5" to={"/contact"}>Contact</Link>
  </>

  return (
    <div className="navbar text-white w-4/5 mx-auto pt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {lists}
          </ul>
        </div>
        
        <div className="flex items-center text-3xl">
          <MdCardTravel className="mr-2"></MdCardTravel><span>Travel Master</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {lists}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="form-control mr-4 text-black">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <button className="btn btn-warning">Login</button>
      </div>
    </div>
  );
};

export default NavBar;