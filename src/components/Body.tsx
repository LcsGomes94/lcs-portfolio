import { ReactNode } from "react"

interface BodyProps {
    children: ReactNode
}
export default function Body({ children } :BodyProps) {
    return (
        <main className={`flex justify-center px-5 pt-32 sm:pt-48 pb-14`}>
            <div className={`w-full max-w-[1600px] flex justify-center flex-col items-center`}>
                {children}
            </div>
        </main>
    )
}