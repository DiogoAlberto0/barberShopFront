import { DetailedHTMLProps, HTMLAttributes } from "react"

import { MenuItem } from "./MenuItem"

type Item = {
    title: string,
    href: string
}

interface IMenuLgProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    items: Item[]
}
export const MenuLg = ({ children, items, className, ...props }: IMenuLgProps) => {
    return (
        <ul
            className={`menu menu-lg bg-base-200 rounded-box w-full ${className} flex flex-col flex-nowrap overflow-auto max-h-[80vh]`}
            {...props}
        >
            {items.map((item, index) => <MenuItem key={index} href={item.href}>{item.title}</MenuItem>)}
            {children}
        </ul>
    )
}