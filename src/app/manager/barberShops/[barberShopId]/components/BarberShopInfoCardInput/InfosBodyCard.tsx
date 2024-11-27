
// types
import { IBarberShopInfos } from "./BarberShopInfoInputCard"
import { DetailedHTMLProps, HTMLAttributes } from "react"

// components
import { Button } from "@/components/Buttons/Button"
import { DividerNoText } from "@/components/DividerNoText"
import { EditIcon } from "@/components/icons/EditIcon"
import { LocaleIcon } from "@/components/icons/LocaleIcon"
import { PhoneIcon } from "@/components/icons/PhoneIcon"

interface IInfosBodyCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    barberShopInfos: IBarberShopInfos,
    setIsEditing: () => void
}

export const InfosBodyCard = ({ barberShopInfos, setIsEditing, className, ...otherProps }: IInfosBodyCardProps) => {

    const { name, address, phone } = barberShopInfos
    return (

        <div className={`card-body ${className}`} {...otherProps}>
            <h2 className="card-title">{name}</h2>
            <div className="flex items-center justify-center gap-1">
                <PhoneIcon />
                <p>{phone}</p>
            </div>
            <DividerNoText />
            <h2 className="card-title"><LocaleIcon />Endereço</h2>
            <div className="flex items-center justify-center gap-1 ml-6">
                <p>CEP: {address.zipcode}</p>
            </div>
            <div className="flex items-center justify-center gap-1 ml-6">
                <p>País: {address.country}</p>
            </div>
            <div className="flex items-center justify-center gap-1 ml-6">
                <p>Estado: {address.state}</p>
            </div>
            <div className="flex items-center justify-center gap-1 ml-6">
                <p>Cidade: {address.city}</p>
            </div>
            <div className="flex items-center justify-center gap-1 ml-6">
                <p>Bairro: {address.neighborhood}</p>
            </div>
            <div className="flex items-center justify-center gap-1 ml-6">
                <p>Rua: {address.street}</p>
            </div>
            <div className="flex items-center justify-center gap-1 ml-6">
                <p>Número: {address.number}</p>
            </div>
            <div className="flex items-center justify-center gap-1 ml-6">
                <p>Complemento: {address.complement}</p>
            </div>
            <div className="card-actions justify-end">
                <Button className="w-auto" variant="primary" onClick={setIsEditing}>
                    <EditIcon responsive />
                    Editar
                </Button>
            </div>
        </div>

    )
}