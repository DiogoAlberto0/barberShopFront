import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IStatValueProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link' | 'error' | 'alert' | 'success'
}

export const StatValue = ({ variant = 'default', children, className, ...otherProps }: IStatValueProps) => {
    return (
        <div className={`stat-value text-${variant} ${className}`} {...otherProps}>{children}</div>
    )
}