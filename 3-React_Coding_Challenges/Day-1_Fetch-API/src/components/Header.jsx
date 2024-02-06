import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between shadow-md py-4 px-10 items-center">
      <img
        src="https://s3.amazonaws.com/company-photo.theladders.com/4416/783b4e8a-31cf-4f94-bb71-87ea4d9d9568.png"
        alt="logo"
        className="w-20 h-20"
      />
      <ul className="flex">
        <Link to="/">
          <li className="px-3 text-orange-500 text-xl font-semibold">Home</li>
        </Link>

        <Link to="/posts">
          <li className="px-3 text-orange-500 text-xl font-semibold">Posts</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
