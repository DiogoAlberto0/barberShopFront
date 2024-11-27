import { IIconProps } from "./IIconProps.type"


export const BackArrowIcon = ({ responsive = true, className, ...otherProps }: IIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className={`
                h-4 w-4 opacity-70
                ${responsive && 'max-[500px]:h-3 max-[500px]:w-3'}
                ${className}
                `}
        >
            <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" strokeWidth="2" />
            <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" strokeWidth="2" />
        </svg>
    )
}