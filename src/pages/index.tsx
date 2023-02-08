import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Body from "../components/Body";

import avatarIMG from "../../public/avatar.png";

export default function Home() {
  return (
    <Body>
      <h1 className={`text-6xl text-teal-500 font-medium text-center`}>
        Lucas Gomes
      </h1>
      <h2 className={`text-3xl py-4 font-light text-center`}>
        Full-Stack Developer
      </h2>
      <p className={`pt-3 text-lg text-center font-light`}>
        In love with simple, efficient and well-structured solutions.
      </p>
      <p className={`text-lg text-center font-light`}>
        Actively engaging in Full-Stack Javascript Development for approximately
        1 year.
      </p>
      <div className="flex justify-center gap-16 p-7 text-7xl text-gray-500 dark:text-gray-400">
        <Link
          href={"https://www.linkedin.com/in/lcsdev94/"}
          target="_blank"
          className="hover:opacity-80"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href={"https://github.com/LcsGomes94"}
          target="_blank"
          className="hover:opacity-80"
        >
          <AiFillGithub />
        </Link>
      </div>
      <div
        className={`bg-gray-50 dark:bg-gray-800 rounded-full overflow-hidden mt-7 h-[350px] w-[350px] relative`}
      >
        <Image
          src={avatarIMG}
          alt={""}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
    </Body>
  );
}
