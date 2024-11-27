import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface IDateInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
}


export const DateInput = ({ children, variant = 'primary', className, ...otherProps }: IDateInputProps) => {
    return (
        <label
            className={`input input-bordered max-[500px]:input-sm flex items-center gap-2 input-${variant} ${className}`}

        >
            {children}
            <input
                type="date"
                className="grow"
                placeholder="Daisy"
                {...otherProps}
            />
        </label>
    )
}