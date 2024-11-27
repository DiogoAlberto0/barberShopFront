import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { PhoneIcon } from '../icons/PhoneIcon';

interface IPhoneInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error',
    responsive?: boolean
}


export const PhoneInput = ({ responsive = true, variant = 'primary', ...props }: IPhoneInputProps) => {
    return (
        <label className={`
        input input-bordered input-${variant}
        w-full flex items-center gap-2 
        ${responsive && 'max-[500px]:input-sm'}
        `}>
            <PhoneIcon />
            <input
                type="text"
                className="grow min-h-12"
                placeholder="Número de telefone"
                {...props}
            />
        </label>
    )
}