import { DetailedHTMLProps, HTMLAttributes } from "react"



interface IStatsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }


export const Stats = ({ children, className, ...otherProps }: IStatsProps) => {

    return (
        <div
            className={`stats shadow max-[630px]:stats-vertical ${className}`}
            {...otherProps}
        >
            {children}
        </div>
    )
}