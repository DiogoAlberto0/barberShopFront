import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IStatDescriptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link' | 'error' | 'alert' | 'success'
}

export const StatDescription = ({ children, variant = 'default', className, ...otherProps }: IStatDescriptionProps) => {
    return (
        <div className={`stat-desc text-${variant} ${className}`} {...otherProps}>{children}</div>
    )
}