import { DetailedHTMLProps, SelectHTMLAttributes } from "react"

interface ISelectInputProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    placeholder: string
}

export const SelectInput = ({ placeholder, children, className, ...otherProps }: ISelectInputProps) => {
    return (
        <select
            className={`select select-primary w-full ${className}`}
            defaultValue="disabled"
            {...otherProps}
        >
            <option disabled value="disabled">{placeholder}</option>
            {children}
        </select>
    )
}