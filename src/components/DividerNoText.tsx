import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IDividerNoTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost' | 'link' | 'error'
}
export const DividerNoText = ({ variant = 'primary', ...otherProps }: IDividerNoTextProps) => {
    return <div
        className={`divider divider-${variant}`}
        {...otherProps}
    />
}