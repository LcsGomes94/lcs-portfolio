import Body from "../components/Body";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiSitepoint,
} from "react-icons/si";
import { useState } from "react";
import {
  NestSkill,
  NextSkill,
  ReactSkill,
  DockerSkill,
  TailwindSkill,
  TypescriptSkill,
  PrismaSkill,
  SQLSkill,
  GitSkill,
  ExtraSkill,
} from "../components/Skills";

const buttonClass = `after:content-[''] after:mt-2 after:block after:border-b-2 after:border-teal-500
  after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out text-gray-500 dark:text-gray-400 hover:opacity-80`;

export default function Skills() {
  const [selected, setSelected] = useState("next");

  function handleSelect(select: string) {
    setSelected(select);
  }

  return (
    <Body>
      <div
        className={`flex flex-col justify-center items-center gap-28 basis-[70vh] w-full`}
      >
        <div
          className={`text-7xl flex flex-wrap gap-10 justify-center items-center basis-1/4`}
        >
          <button
            onClick={() => handleSelect("next")}
            className={`${buttonClass} ${
              selected === "next"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiNextdotjs />
          </button>
          <button
            onClick={() => handleSelect("react")}
            className={`${buttonClass} ${
              selected === "react"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiReact />
          </button>
          <button
            onClick={() => handleSelect("typescript")}
            className={`${buttonClass} ${
              selected === "typescript"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiTypescript />
          </button>
          <button
            onClick={() => handleSelect("tailwind")}
            className={`${buttonClass} ${
              selected === "tailwind"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiTailwindcss />
          </button>
          <button
            onClick={() => handleSelect("nest")}
            className={`${buttonClass} ${
              selected === "nest"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiNestjs />
          </button>
          <button
            onClick={() => handleSelect("prisma")}
            className={`${buttonClass} ${
              selected === "prisma"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiPrisma />
          </button>
          <button
            onClick={() => handleSelect("sql")}
            className={`${buttonClass} ${
              selected === "sql"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiPostgresql />
          </button>
          <button
            onClick={() => handleSelect("docker")}
            className={`${buttonClass} ${
              selected === "docker"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiDocker />
          </button>
          <button
            onClick={() => handleSelect("git")}
            className={`${buttonClass} ${
              selected === "git"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiGit />
          </button>
          <button
            onClick={() => handleSelect("extra")}
            className={`${buttonClass} ${
              selected === "extra"
                ? "text-cyan-500 dark:text-cyan-500 after:scale-x-100"
                : ""
            }`}
          >
            <SiSitepoint />
          </button>
        </div>

        <div
          className={`flex-1 bg-gradient-to-br from-cyan-500 via-cyan-200 to-teal-500 p-1 w-full max-w-[1080px]`}
        >
          {selected === "next" ? (
            <NextSkill />
          ) : selected === "react" ? (
            <ReactSkill />
          ) : selected === "typescript" ? (
            <TypescriptSkill />
          ) : selected === "nest" ? (
            <NestSkill />
          ) : selected === "prisma" ? (
            <PrismaSkill />
          ) : selected === "sql" ? (
            <SQLSkill />
          ) : selected === "git" ? (
            <GitSkill />
          ) : selected === "tailwind" ? (
            <TailwindSkill />
          ) : selected === "docker" ? (
            <DockerSkill />
          ) : selected === "extra" ? (
            <ExtraSkill />
          ) : (
            false
          )}
        </div>
      </div>
    </Body>
  );
}
