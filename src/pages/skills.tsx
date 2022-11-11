import Body from "../components/Body";

import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiStyledcomponents, SiJavascript, SiCss3, SiHtml5, SiGit, SiSitepoint } from 'react-icons/si'
import { useState } from "react";
import { JavascriptSkill, NextSkill, ReactSkill, StyledCompSkill, TailwindSkill, TypescriptSkill, CSSSkill, HTMLSkill, GitSkill, ExtraSkill } from '../components/Skills'

const buttonClass = `after:content-[''] after:mt-2 after:block after:border-b-2 after:border-teal-500
  after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out text-gray-500 dark:text-gray-400 hover:opacity-80`

export default function Skills() {
  const [ selected, setSelected ] = useState('next')

  function handleSelect (select: string) {
    setSelected(select)
  }

  return (
    <Body>
        <div className={`flex flex-col justify-center items-center gap-28 basis-[70vh] w-full`}>
          <div className={`text-7xl flex flex-wrap gap-10 justify-center items-center basis-1/4`}>
            <button onClick={() => handleSelect('next')} className={`${buttonClass} ${selected === 'next' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiNextdotjs />
            </button>
           <button onClick={() => handleSelect('react')} className={`${buttonClass} ${selected === 'react' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiReact />
            </button>
           <button onClick={() => handleSelect('typescript')} className={`${buttonClass} ${selected === 'typescript' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiTypescript />
            </button>
           <button onClick={() => handleSelect('tailwind')} className={`${buttonClass} ${selected === 'tailwind' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiTailwindcss />
            </button>
           <button onClick={() => handleSelect('styledcomp')} className={`${buttonClass} ${selected === 'styledcomp' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiStyledcomponents />
            </button>
           <button onClick={() => handleSelect('javascript')} className={`${buttonClass} ${selected === 'javascript' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiJavascript />
            </button>
           <button onClick={() => handleSelect('css')} className={`${buttonClass} ${selected === 'css' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiCss3 />
            </button>
           <button onClick={() => handleSelect('html')} className={`${buttonClass} ${selected === 'html' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiHtml5 />
            </button>
           <button onClick={() => handleSelect('git')} className={`${buttonClass} ${selected === 'git' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiGit />
            </button>
           <button onClick={() => handleSelect('extra')} className={`${buttonClass} ${selected === 'extra' ? 'text-cyan-500 dark:text-cyan-500 after:scale-x-100' : ''}`} >
              <SiSitepoint />
            </button>
          </div>
          
          <div className={`flex-1 bg-gradient-to-br from-cyan-500 via-cyan-200 to-teal-500 p-1 w-full max-w-[1080px]`}>
            {selected === 'next' ? <NextSkill /> : 
              selected === 'react' ? <ReactSkill /> :
              selected === 'typescript' ? <TypescriptSkill /> :
              selected === 'javascript' ? <JavascriptSkill /> :
              selected === 'html' ? <HTMLSkill /> :
              selected === 'css' ? <CSSSkill /> :
              selected === 'git' ? <GitSkill /> :
              selected === 'tailwind' ? <TailwindSkill /> :
              selected === 'styledcomp' ? <StyledCompSkill /> :
              selected === 'extra' ? <ExtraSkill /> : false
            }
          </div>
        </div>
    </Body>
  )
}
