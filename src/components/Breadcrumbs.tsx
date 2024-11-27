import { DetailedHTMLProps, HTMLAttributes } from "react"

type Item = {
    title: string,
    href?: string
}

interface IBreadcrumbProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: Item[]
}

export const Breadcrumbs = ({ items, className, ...props }: IBreadcrumbProps) => {
    return (
        <div
            className={`w-full breadcrumbs text-sm ${className}`}
            {...props}
        >
            <ul className="flex-wrap">
                {
                    items.map((item, index) => {
                        if (item.href) return <li key={index}><a href={item.href}>{item.title}</a></li>
                        else return <li key={index} className="last:text-primary">{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
}