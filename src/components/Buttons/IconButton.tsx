import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

interface IIconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: 'default' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link' | 'error'
    responsive?: boolean,
    hover?: boolean
}
export const IconButton = ({
    hover = true,
    responsive = true,
    children,
    variant = "primary",
    className,
    ...otherProps
}: IIconButtonProps) => {
    return (
        <button
            className={`
                bg-${variant} text-primary-content ${hover && 'hover:opacity-20'}
                p-3 rounded-full
                ${responsive && 'max-[500px]:p-2'}
                ${className}
                
            `}

            {...otherProps}>
            {children}
        </button>
    )
}
