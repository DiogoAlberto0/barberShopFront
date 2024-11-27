import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IStatTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: string
}

export const StatTitle = ({ children, className, ...otherProps }: IStatTitleProps) => {
    return (
        <div className={`stat-title ${className}`} {...otherProps}>{children}</div>
    )
}