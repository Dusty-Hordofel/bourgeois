import Link from "next/link";
import React, { MutableRefObject } from "react";

interface NavProps {
  section1Ref: MutableRefObject<HTMLInputElement | null>;
  section3Ref: MutableRefObject<HTMLInputElement | null>;
  section6Ref: MutableRefObject<HTMLInputElement | null>;
}
const Navbar = ({ section1Ref, section3Ref, section6Ref }: NavProps) => {
  const handleScrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 lg:px-6 h-14 flex justify-between">
        <Link
          className="flex items-center justify-center "
          href="#section1"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(section1Ref);
          }}
        >
          <span className="ml-2 sm:text-xl lg:text-2xl font-bold">
            Bourgeois.P
          </span>
        </Link>
        <nav className="flex justify-end gap-x-4 sm:gap-x-8 items-center flex-1">
          <Link
            className="text-sm sm:text-base font-medium hover:underline underline-offset-4"
            href="#section3"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection(section3Ref);
            }}
          >
            Services
          </Link>
          <Link
            className="text-sm sm:text-base font-medium hover:underline underline-offset-4"
            href="#section6"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection(section6Ref);
            }}
          >
            <span className="text-green-700 text-xl">(07 66 80 76 00)</span>
          </Link>
          {/* <Link
          className="text-sm sm:text-base font-medium hover:underline underline-offset-4"
          href="#section6"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(section6Ref);
          }}
        >
          Contact
        </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
