import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface IFileInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    responsive?: true
}

export const FileInput = ({ responsive = true, label, ...otherProps }: IFileInput) => {
    return (
        <div className={`
            flex flex-col w-full
        `}>
            <label htmlFor="" className="p-2">{label}</label>
            <input
                type="file"
                className={`
                    file-input input-primary file-input-bordered w-full 
                    ${responsive && 'max-[500px]:file-input-sm'}
                `}
                {...otherProps}
            />
        </div>
    )
}