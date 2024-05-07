import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/canvas/Stars"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   gsap.to("body", {
  //     backgroundPosition: "100% 50%",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: document.body,
  //       scrub: true,
  //       start: "top top",
  //       end: "bottom bottom",
  //     },
  //   });
  // }, []);

  return (
    <>
      <StarsCanvas />
      <Component {...pageProps} />
    </>
  );
}
