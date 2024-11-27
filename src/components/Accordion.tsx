import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IAccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
}

export const Accordion = ({ children, title, className, ...otherProps }: IAccordionProps) => {
    return (
        <div
            tabIndex={0}
            className={`collapse collapse-arrow border border-base-300 bg-base-200 ${className}`}
            {...otherProps}
        >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex justify-between" >{title}</div>
            <div className="collapse-content flex flex-col items-center gap-1">
                {children}
            </div>
        </div>
    )
}