import Image from 'next/image'
import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Body from '../components/Body'

export default function Home() {
  return (
      <Body>
        <h1 className={`text-6xl text-teal-500 font-medium text-center`}>Lucas Gomes</h1>
          <h2 className={`text-3xl py-4 font-light text-center`}>Desenvolvedor Front-End</h2>
          <p className={`pt-3 text-lg text-center font-light`}>
            Apaixonado por soluções simples, eficientes e bem estruturadas.
          </p>
          <p className={`text-lg text-center font-light`}>
            Há mais de 15 anos em contato ativo com lógica de programação.
          </p>
          <div className='flex justify-center gap-16 p-7 text-7xl text-gray-500 dark:text-gray-400'>
            <Link href={'https://www.linkedin.com/in/lcsdev94/'} target="_blank" className='hover:opacity-80' >
              <AiFillLinkedin />
            </Link>
            <Link href={'https://github.com/LcsGomes94'} target="_blank" className='hover:opacity-80' >
              <AiFillGithub />
            </Link>
          </div>
          <div className={`bg-gradient-to-b from-cyan-500 to-transparent rounded-full overflow-hidden mt-7 h-[350px] w-[350px] relative`}>
            <Image src={'/avatar.svg'} alt={''} layout='fill' objectFit='cover' />
          </div>
      </Body>
  )
}