import { DetailedHTMLProps, HTMLAttributes } from "react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

import Image from "next/image"

interface IImageCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    src: string | StaticImport
}
export const ImageCard = ({ src, className, ...otherProps }: IImageCardProps) => {
    return (
        <figure
            className={`relative ${className}`}
            {...otherProps}
        >
            <Image
                src={src}
                alt="Background"
                className="h-48 w-full object-cover object-center blur-md opacity-50"
            />
            <Image
                src={src}
                alt="Shoes"
                className="absolute h-48 object-contain object-center"
            />
        </figure>
    )
}