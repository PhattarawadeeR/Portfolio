import React from "react";

function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between max-w-[1040px] mx-auto py-[10px]">
        <div className="">PHAT</div>
        <div className="flex p-[20px] gap-[40px] text-[16px] text-grey-01">
          <a href="#Home">Home</a>
          <a href="#Work">Work</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
