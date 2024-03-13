import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0   sm:max-w-[1200px] mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div>
          <img src="/assets/logo3.png" alt="" width="90px" height="100px" />
        </div>
        <div className="hidden md:block">
          <div className="flex ">
            <MenuItem item="About" id="about" />
            <MenuItem item="Work" id="work" />
            <MenuItem
              item="CV"
              id="downloadCv"
              filePath="../../Bilal-Raza-React_Next-Resume.pdf"
            />
          </div>
        </div>

        <div className="space-x-4 hidden md:block">
          <button className="p-[3px] relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <Link
                href="https://www.linkedin.com/in/bilalrazaa/"
                target="_blank"
              >
                linkedIn
              </Link>
            </div>
          </button>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <Link href="https://github.com/bi305" target="_blank">
                Github
              </Link>
            </div>
          </button>
        </div>
        <div className="md:hidden">
          <div
            className="sm:z-50 "
            onClick={() => {
              toggleMobileMenu();
            }}
          >
            ☰
          </div>
        </div>
      </Menu>
      {isMobileMenuOpen && <MobileMenu displayAnimation={isMobileMenuOpen} />}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 -z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </div>
  );
}
const MobileMenu = ({ displayAnimation }: any) => {
  const [showMenu, setShowMenu] = useState(displayAnimation);

  useEffect(() => {
    if (!displayAnimation) {
      // Trigger the hide animation first
      setShowMenu(true);
      setTimeout(() => setShowMenu(false), 500); // Match the animation duration
    } else {
      setShowMenu(true);
    }
  }, [displayAnimation]);

  if (!showMenu) return null;

  return (
    <div
      className={`flex flex-col  justify-center space-y-4 text-sm   mt-10 bg-black p-5 m-5 rounded-xl menu-enter backdrop-blur-sm bg-purple-200/60   ${
        displayAnimation ? "enter-menu " : "exit-menu"
      } `}
    >
      <MenuItem item="About" id="about" />
      <MenuItem item="Work" id="work" />
      <MenuItem item="Contact" id="contact" />
      <div className="space-x-4 ">
        <Link href="https://www.linkedin.com/in/bilalrazaa/" target="_blank">
          <button className="p-[3px] relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              linkedIn
            </div>
          </button>
        </Link>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Github
          </div>
        </button>
      </div>
    </div>
  );
};
