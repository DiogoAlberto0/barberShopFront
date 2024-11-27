import { DetailedHTMLProps, HTMLAttributes } from "react"

interface ICollapseProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
    variant?: 'default' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link' | 'error'
}
export const Collapse = ({ variant = 'primary', title, children, className, ...otherProps }: ICollapseProps) => {
    return (

        <div className={`bg-base-200 collapse ${className}`} {...otherProps}>
            <input type="checkbox" className="peer" />
            <div
                className={`collapse-title bg-${variant} text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content`}
            >
                {title}
            </div>
            <div
                className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    {children}
                </div>
            </div>
        </div>


    )
}