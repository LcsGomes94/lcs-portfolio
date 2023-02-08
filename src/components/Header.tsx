import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header() {
  const { handleSetDarkMode } = useDarkMode();

  function handleDarkModeToggle() {
    document.documentElement.classList.toggle("dark");
    handleSetDarkMode();
  }

  const router = useRouter();

  return (
    <header
      className={`fixed z-10 left-0 right-0 top-0 flex justify-center py-8 px-5 bg-white dark:bg-gray-900`}
    >
      <div
        className={`w-full max-w-[1120px] flex justify-center items-center gap-20`}
      >
        <Link href={"/"} className={`hidden md:inline-block flex-1`}>
          <h1 className={`font-burtons text-2xl pt-1 text-cyan-500`}>
            LcsGomes
          </h1>
        </Link>
        <nav className={`flex gap-4 sm:gap-8 flex-1 justify-center`}>
          <Link
            href={"/"}
            className={`after:content-[''] after:block after:border-b-2 after:border-cyan-400 after:scale-x-0
                after:transition-transform after:duration-300 after:ease-in-out ${
                  router.asPath === "/" ? "after:scale-x-100" : ""
                }`}
          >
            <h2
              className={`text-2xl font-medium hover:opacity-60 dark:hover:opacity-80`}
            >
              Home
            </h2>
          </Link>
          <Link
            href={"/skills"}
            className={`after:content-[''] after:block after:border-b-2 after:border-cyan-400 after:scale-x-0
                after:transition-transform after:duration-300 after:ease-in-out ${
                  router.asPath === "/skills" ? "after:scale-x-100" : ""
                }`}
          >
            <h2
              className={`text-2xl font-medium hover:opacity-60 dark:hover:opacity-80`}
            >
              Skills
            </h2>
          </Link>
          <Link
            href={"/projects"}
            className={`after:content-[''] after:block after:border-b-2 after:border-cyan-400 after:scale-x-0
                after:transition-transform after:duration-300 after:ease-in-out ${
                  router.asPath === "/projects" ? "after:scale-x-100" : ""
                }`}
          >
            <h2 className={`text-2xl font-medium hover:opacity-60`}>
              Projects
            </h2>
          </Link>
        </nav>
        <div className="hidden sm:flex items-center flex-1 justify-end">
          <button onClick={handleDarkModeToggle}>
            <BsFillMoonStarsFill className="text-3xl hover:opacity-60 dark:hover:opacity-80" />
          </button>
          <Link
            className="ml-8"
            href={
              "https://drive.google.com/file/d/19jcgNujSlqXXGtTikFCDyx0_JL6DFX0y/view?usp=share_link"
            }
            target="_blank"
          >
            <button
              className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                        px-4 py-2 border-none rounded-md hover:opacity-60 dark:hover:opacity-80`}
            >
              Resume
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
