import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface IToggleProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    variant?: string
}

export const Toggle = ({ children, className, ...otherProps }: IToggleProps) => {
    return (
        <div
            className={`form-control ${className}`}
        >
            <label className="label cursor-pointer flex flex-col items-start">
                <span className="label-text whitespace-nowrap">{children}</span>
                <input type="checkbox"
                    className="toggle toggle-primary max-[500px]:toggle-xs"
                    {...otherProps}
                />
            </label>
        </div>
    )
}