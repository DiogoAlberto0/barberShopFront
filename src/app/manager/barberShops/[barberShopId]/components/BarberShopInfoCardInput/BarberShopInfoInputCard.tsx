'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { DetailedHTMLProps, HTMLAttributes, useState } from "react"
import { FormBodyCard } from "./FormBodyCard"
import { InfosBodyCard } from "./InfosBodyCard"
import { ImageCard } from "./ImageCard"

export interface IBarberShopInfos {
    imageUrl: string | StaticImport,
    name: string,
    phone: string,
    address: {
        country: string,
        state: string,
        city: string,
        neighborhood: string,
        street: string,
        number: number,
        complement?: string,
        zipcode: string,
    }
}

interface IBarberShopInfoCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    barberShopInfos: IBarberShopInfos,
    setIsEditing?: () => void
}

export const BarberShopInfoInputCard = ({ barberShopInfos, className, ...otherProps }: IBarberShopInfoCardProps) => {

    const [isEditing, setIsEditing] = useState(false)

    return (
        <div
            className={`card bg-base-100 w-96 shadow-xl ${className}`}
            {...otherProps}>
            <ImageCard src={barberShopInfos.imageUrl} />
            {
                isEditing ?
                    <FormBodyCard
                        barberShopInfos={barberShopInfos}
                        setIsEditing={() => setIsEditing(!isEditing)}
                    />
                    :
                    <InfosBodyCard
                        barberShopInfos={barberShopInfos}
                        setIsEditing={() => setIsEditing(!isEditing)}
                    />
            }
        </div>
    )
}