import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IStatProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: string
}

export const Stat = ({ children, className, ...otherProps }: IStatProps) => {
    return (
        <div className={`stat place-items-center ${className}`} {...otherProps}>
            {children}
        </div>
    )
}