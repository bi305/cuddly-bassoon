"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  item,
  id,
  filePath,
}: {
  item: string;
  id: string;
  filePath?: string;
}) => {
  return (
    <div className="relative  ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] mx-5"
      >
        <a
          href={id === "downloadCv" ? filePath : `#${id}`}
          download={id === "downloadCv"}
        >
          {item}
        </a>
      </motion.p>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={`relative rounded-2xl border border-transparent  dark:border-purple/[0.2] shadow-input px-4 py-1 flex justify-between  items-center transition-colors	 duration-700	delay-500	
      ${scrolled ? " text-black" : "text-white"}   ${
        scrolled ? "backdrop-blur-sm bg-purple-200/60 " : "bg-transparent"
      } `}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href?: string;
  src?: string;
}) => {
  return (
    // <Link href={href} className="flex space-x-2">
    <>
      {/* <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      /> */}
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </>
    // </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
