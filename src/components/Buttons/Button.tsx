import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    responsive?: boolean,
    variant?: 'default' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link' | 'error'
}

export const Button = ({ responsive = true, variant = 'primary', children, className, ...props }: IButtonProps) => {

    return (
        <button
            className={`btn btn-${variant} ${responsive && 'max-[500px]:btn-sm'} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    )
}