import "@/app/global.css";
import StarsCanvas from "./components/canvas/Stars";

import { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {" "}
        <title>Bilal Raza Portfolio</title>
        <meta name="og:title" content="Bilal Raza Portfolio" />
        <meta
          name="og:description"
          content="Hi 👋🏻 I'm Bilal Raza  React Front-end dev"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript , React.js , Next.js"
        />
        <meta name="author" content="Bilal Raza" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile2.JPG" />
        <meta property="og:url" content="https://techmatrixs.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <StarsCanvas />
      <body>{children}</body>
    </html>
  );
}
