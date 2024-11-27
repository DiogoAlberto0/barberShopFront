import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"

interface ITextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label: string
    variant?: 'default' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link' | 'error'
}
export const TextArea = ({ label, variant = 'primary', className, ...otherProps }: ITextAreaProps) => {
    return (
        <div className={`w-full flex flex-col ${className}`}>
            <label className="">
                {label}
            </label>
            <textarea className={`textarea textarea-${variant} max-[500px]:textarea-md rounded-2xl`} {...otherProps} />
        </div>
    )
}