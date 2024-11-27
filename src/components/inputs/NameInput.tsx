import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { PeopleIcon } from "../icons/PeopleIcon";

interface INameInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error',
    responsive?: boolean
}


export const NameInput = ({ responsive = true, variant = 'primary', ...props }: INameInputProps) => {
    return (
        <label className={`
        input input-bordered input-${variant} 
        w-full flex items-center gap-2 
        ${responsive && 'max-[500px]:input-sm'}
        `}>
            <PeopleIcon />
            <input
                type="text"
                className="grow min-h-10"
                placeholder="Nome"
                {...props}
            />
        </label>
    )
}