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
      className={cn("fixed top-10 inset-x-0 max-w-5xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div>
          <div className="  text-purple-500  text-2xl">Logo</div>
        </div>
        <div className="hidden md:block">
          <div className="flex ">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="projects">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
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
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <Link href="https://github.com/bi305" target="_blank">
                Github
              </Link>
            </div>
          </button>
        </div>
        <div className="md:hidden text-red-900">
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
      className={`flex flex-col  justify-center space-y-4 text-sm   mt-10 bg-black p-5 m-5 rounded-xl menu-enter  ${
        displayAnimation ? "enter-menu " : "exit-menu"
      } `}
    >
      <HoveredLink href="/web-dev">Services</HoveredLink>
      <HoveredLink href="/web-dev">projects</HoveredLink>
      <HoveredLink href="/web-dev">Pricing</HoveredLink>
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
