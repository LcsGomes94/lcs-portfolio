import Image from "next/image";
import Link from "next/link";
import Body from "../components/Body";
import { useDarkMode } from "../context/DarkModeContext";


export default function Projects() {

    const { darkMode } = useDarkMode()

    return (
        <Body>
            <div className="flex gap-10 flex-wrap">

                <div className={`bg-gradient-to-br  from-cyan-500 via-cyan-200 to-teal-500 flex-1
                basis-2/3 lg:basis-1/3 p-1 relative overflow-hidden group`}>
                    <Image src={`${darkMode ? '/portfolio-dark.png' : '/portfolio.png'}`} layout='responsive' width={1920} height={1080} alt='' />
                    <div className={`absolute bottom-0 top-1 left-1 right-1 bg-white
                    translate-y-full transition-transform duration-200 group-hover:bottom-1 group-hover:translate-y-0
                    flex flex-col justify-between items-center dark:bg-gray-900`} >

                        <div className={`flex flex-col gap-1 sm:gap-5 lg:gap-2 xl:gap-5 pt-1 sm:pt-5 lg:pt-2 xl:pt-5 flex-1`}>
                            <h1 className={`text-center text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-teal-500 font-medium`}>Portfolio</h1>
                            <div className={`flex flex-col justify-center px-5 sm:p-5 lg:p-2 xl:p-5 flex-1`}>
                                <p className={`font-light`}><span className={`font-medium text-cyan-500`}>
                                    Main techs used:</span> NextJS, Typescript, TailwindCSS.
                                </p>
                                <p className={`hidden sm:inline font-light`}><span className={`font-medium text-cyan-500`}>
                                    Next features used:</span> useRoute, Next Image.
                                </p>
                                <p className={`font-light`}><span className={`font-medium text-cyan-500`}>
                                    TailwindCSS:</span> Dark Mode Theme toggle. Fully responsive.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-10 p-1 sm:p-5 lg:p-2 xl:p-5">
                            <Link href={'/'} target="_blank" >
                                <button className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                                px-4 py-2 border-none rounded-md hover:opacity-60 dark:hover:opacity-80 w-28`}>
                                    Live
                                </button>
                            </Link>
                            <Link href={'https://github.com/LcsGomes94/lcs-portfolio'} target="_blank" >
                                <button className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                                px-4 py-2 border-none rounded-md hover:opacity-60 dark:hover:opacity-80 w-28`}>
                                    GitHub
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`bg-gradient-to-br  from-cyan-500 via-cyan-200 to-teal-500 flex-1
                basis-2/3 lg:basis-1/3 p-1 relative overflow-hidden group`}>
                    <Image src={`${darkMode ? '/next-pokedex-dark.png' : '/next-pokedex.png'}`} layout='responsive' width={1920} height={1080} alt='' placeholder="blur" />
                    <div className={`absolute bottom-0 top-1 left-1 right-1 bg-white
                    translate-y-full transition-transform duration-200 group-hover:bottom-1 group-hover:translate-y-0
                    flex flex-col justify-between items-center dark:bg-gray-900`} >

                        <div className={`flex flex-col gap-1 sm:gap-5 lg:gap-2 xl:gap-5 pt-1 sm:pt-5 lg:pt-2 xl:pt-5 flex-1`}>
                            <h1 className={`text-center text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-teal-500 font-medium`}>Pokédex</h1>
                            <div className={`flex flex-col justify-center px-5 sm:p-5 lg:p-2 xl:p-5 flex-1`}>
                                <p className={`font-light`}><span className={`font-medium text-cyan-500`}>
                                    Main techs used:</span> NextJS, Typescript, TailwindCSS.
                                </p>
                                <p className={`font-light`}><span className={`font-medium text-cyan-500`}>
                                    Next features used:</span> SSG, API Route, Next Image.
                                </p>
                                <p className={`hidden sm:inline font-light`}><span className={`font-medium text-cyan-500`}>
                                    Stylized with TailwindCSS:</span> Check GitHub for more info about it.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-10 p-1 sm:p-5 lg:p-2 xl:p-5">
                            <Link href={'https://next-pokedex-rho.vercel.app/'} target="_blank" >
                                <button className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                                px-4 py-2 border-none rounded-md hover:opacity-60 dark:hover:opacity-80 w-28`}>
                                    Live
                                </button>
                            </Link>
                            <Link href={'https://github.com/LcsGomes94/next-pokedex'} target="_blank" >
                                <button className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                                px-4 py-2 border-none rounded-md hover:opacity-60 dark:hover:opacity-80 w-28`}>
                                    GitHub
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`bg-gradient-to-br  from-cyan-500 via-cyan-200 to-teal-500 flex-1
                basis-2/3 lg:basis-1/3 p-1 relative overflow-hidden group`}>
                    <Image src='/react-kanban.png' layout='responsive' width={1920} height={1080} alt='' placeholder="blur" />
                    <div className={`absolute bottom-0 top-1 left-1 right-1 bg-white
                    translate-y-full transition-transform duration-200 group-hover:bottom-1 group-hover:translate-y-0
                    flex flex-col justify-between items-center dark:bg-gray-900`} >

                        <div className={`flex flex-col gap-1 sm:gap-5 lg:gap-2 xl:gap-5 pt-1 sm:pt-5 lg:pt-2 xl:pt-5 flex-1`}>
                            <h1 className={`text-center text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-teal-500 font-medium`}>Kanban Board</h1>
                            <div className={`flex flex-col justify-center px-5 sm:p-5 lg:p-2 xl:p-5 flex-1`}>
                                <p className={`font-light`}><span className={`font-medium text-cyan-500`}>
                                    Main techs used:</span> ReactJS, Typescript, Styled Component.
                                </p>
                                <p className={`hidden sm:inline font-light`}><span className={`font-medium text-cyan-500`}>
                                    Extra libraries used:</span> react-modal, auto-animate, dnd-kit, react-tooltip.
                                </p>
                                <p className={`font-light`}><span className={`font-medium text-cyan-500`}>
                                    React hooks used:</span> useEffect, useState, useContext, useRef. Plus other libraries custom hooks.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-10 p-1 sm:p-5 lg:p-2 xl:p-5">
                            <Link href={'https://react-kanban-mauve.vercel.app/'} target="_blank" >
                                <button className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                                px-4 py-2 border-none rounded-md hover:opacity-60 dark:hover:opacity-80 w-28`}>
                                    Live
                                </button>
                            </Link>
                            <Link href={'https://github.com/LcsGomes94/react-kanban'} target="_blank" >
                                <button className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                                px-4 py-2 border-none rounded-md hover:opacity-60 dark:hover:opacity-80 w-28`}>
                                    GitHub
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`bg-gradient-to-br  from-cyan-500 via-cyan-200 to-teal-500 flex-1
                basis-2/3 lg:basis-1/3 p-1 relative overflow-hidden group`}>
                    <Image src='/javascript-kanban.png' layout='responsive' width={1920} height={1080} alt='' placeholder="blur" />
                    <div className={`absolute bottom-0 top-1 left-1 right-1 bg-white
                    translate-y-full transition-transform duration-200 group-hover:bottom-1 group-hover:translate-y-0
                    flex flex-col justify-between items-center dark:bg-gray-900`} >

                        <div className={`flex flex-col gap-1 sm:gap-5 lg:gap-2 xl:gap-5 pt-1 sm:pt-5 lg:pt-2 xl:pt-5 flex-1`}>
                            <h1 className={`text-center text-2xl sm:text-3xl lg:text-2xl xl:text-3xl text-teal-500 font-medium`}>Kanban Board</h1>
                            <div className={`flex flex-col justify-center px-5 sm:p-5 lg:p-2 xl:p-5 flex-1`}>
                                <p className={`font-light`}><span className={`font-medium text-cyan-500`}>
                                    Main techs used:</span> Javascript, HTML, CSS.
                                </p>
                                <p className={`font-light`}><span className={`font-medium text-cyan-500`}>
                                    First ever project:</span> The purpose of it is to show my knowledge about DOM manipulation.
                                </p>
                                <p className={`hidden sm:inline font-light`}><span className={`font-medium text-cyan-500`}>
                                    Made from scratch:</span> Check GitHub for more info about it.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-10 p-1 sm:p-5 lg:p-2 xl:p-5">
                            <Link href={'https://kanban-ashen.vercel.app/'} target="_blank" >
                                <button className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                                px-4 py-2 border-none rounded-md hover:opacity-60 dark:hover:opacity-80 w-28`}>
                                    Live
                                </button>
                            </Link>
                            <Link href={'https://github.com/LcsGomes94/javascript-kanban'} target="_blank" >
                                <button className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                                px-4 py-2 border-none rounded-md hover:opacity-60 dark:hover:opacity-80 w-28`}>
                                    GitHub
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </Body>
  )
}
