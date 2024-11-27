import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface ILabelInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    variant?: 'default' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link' | 'error'
    responsive?: boolean
}
export const LabelInput = ({ responsive = true, label, variant = 'primary', className, ...otherProps }: ILabelInputProps) => {
    return (
        <label className={`
        w-full 
        text-base-content
        input input-bordered input-${variant} 
        ${responsive && 'max-[500px]:input-sm'}
        flex items-center gap-2 
        ${className}
        `}>
            {label}
            <input className={`grow min-h-10`} {...otherProps} />
        </label>
    )
}