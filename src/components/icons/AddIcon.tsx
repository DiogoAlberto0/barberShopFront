import { IIconProps } from "./IIconProps.type"


export const AddIcon = ({ responsive = true, className, ...otherProps }: IIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="transparent"
            stroke="currentColor"
            className={`
            h-4 w-4 opacity-70
            ${responsive && 'max-[500px]:h-3 max-[500px]:w-3'}
            ${className} 
            `}
            {...otherProps}
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                strokeWidth="2"
            />
            <path
                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                strokeWidth="2"
                strokeLinecap="round" />
        </svg>
    )
}