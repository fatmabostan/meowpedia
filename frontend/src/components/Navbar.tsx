import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar bg-base-100 border-y-4 border-b-slate-800 sm:justify-evenly justify-between">
        <div className="navbar-start">
          <a href="/" className="">
            <img
              src="../src/assets/images/icon.svg"
              alt="logo"
              width="140"
              height="140"
            />
          </a>
        </div>
        <div className="flex flex-row gap-12">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <Link to="/cat/create" className="btn">İlan Ver</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
