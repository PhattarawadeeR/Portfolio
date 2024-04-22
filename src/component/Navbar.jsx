import React from "react";

function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between max-w-[1040px] mx-auto py-[10px]">
        <div className="">PHAT</div>
        <div className="flex p-[20px] gap-[40px]">
          <a>Home</a>
          <a>Work</a>
          <a>About</a>
          <a>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
