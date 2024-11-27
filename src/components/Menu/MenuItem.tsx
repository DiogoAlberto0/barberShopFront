import { DetailedHTMLProps, LiHTMLAttributes } from "react"

import Link from "next/link"


interface IMenuItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    href?: string
}

export const MenuItem = ({ children, href, ...otherProps }: IMenuItemProps) => {
    return (
        <li
            {...otherProps}
        >
            <Link className="flex justify-center md:justify-start" href={href || ''}>
                {children}
            </Link>
        </li>
    )
}