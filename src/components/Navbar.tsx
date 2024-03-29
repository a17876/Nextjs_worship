"use client";
import { NavLink } from "react-router-dom";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center px-10 py-4 border-b ">
      <Link href="/"><h3>Worship&</h3></Link>
      <div className="flex justity-end items-center gap-x-10"></div>
      <Link href="/playlist">This Week</Link>
      <Link href="/pool">Music Sheet Pool</Link>
      <Link href="/new">New</Link>
      </div>
    </>
  );
};

export default Navbar;
