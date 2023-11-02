import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    label:string,
    iconToLeft?:ReactNode,
    iconToRight?:ReactNode
}

export const PrimaryButton = ({label,iconToLeft,iconToRight,...props}:MyButtonProps) =>{
    return <button {...props} className={twMerge('w-[328px] bg-primary rounded-lg py-2.5 text-bright border-primary border-2 flex gap-2 justify-center',props.className)}>
        {iconToLeft}
        {label}
        {iconToRight}
    </button>
}

export const OutlineButton = ({label,iconToLeft,iconToRight,...props}:MyButtonProps) => {
    return <button {...props} className={twMerge('w-[328px] bg-bright rounded-lg py-2.5 border-primary border-2 text-primary flex gap-2 justify-center',props.className)}>
                {iconToLeft}
                {label}
                {iconToRight}
            </button>
}