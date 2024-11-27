import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { IdentityIcon } from "../icons/IdentityIcon";

interface ICpfInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
}


export const CpfInput = ({ variant = 'primary', ...props }: ICpfInputProps) => {
    return (
        <label className={`input input-bordered max-[500px]:input-sm w-full flex items-center gap-2 input-${variant}`}>
            <IdentityIcon />
            <input
                type="text"
                className="grow min-h-10"
                placeholder="Número CPF"
                {...props}
            />
        </label>
    )
}