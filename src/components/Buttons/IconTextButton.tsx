import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

import { Button } from "./Button"

interface IIconTextButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: 'default' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link' | 'error'
    responsive?: boolean
}
export const IconTextButton = ({ responsive = true, children, variant = "primary", className, ...otherProps }: IIconTextButtonProps) => {
    return (
        <Button
            className={`${className}`}
            variant={variant}
            responsive={responsive}
            {...otherProps}>
            {children}
        </Button>
    )
}
