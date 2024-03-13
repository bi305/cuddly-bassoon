import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className=" flex justify-center  items-center h-screen">
      <div className="text-center">
        <div className="text-4xl">404 | Page Not Found</div>
        <div>
          <Link href="/">Go back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
