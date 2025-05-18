import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Layout/AuthProviderComponent";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/updateProfile"}>Update Profile</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to={"/userProfile"}>User Profile</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar px-8 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-2xl font-serif">Nestora</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mr-6"
          >
            <div className="w-10 rounded-full hover:scale-115 " title={user?.displayName ||'user'}>
             
              <img
                
                alt="Tailwind CSS Navbar component"
                src= {user.
                    photoURL?user.photoURL :  "https://i.ibb.co/8DcCdnPQ/491041468-2168488280249959-8243134240777871618-n.jpg"} 
                     
              />
            </div>
          </div>
        )}

        <div>
          {user ? (
            <div className="flex items-center gap-2">
              <p className="text-[14px]">{user.email?user.email:user.displayName}</p>
              <button onClick={handleSignOut} className="btn text-lg btn-error">
               
                SignOut
              </button>
            </div>
          ) : (
            <Link to={"/login"} className="btn text-lg btn-accent">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
