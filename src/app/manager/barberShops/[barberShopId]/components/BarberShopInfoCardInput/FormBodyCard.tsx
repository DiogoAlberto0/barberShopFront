import { IBarberShopInfos } from "./BarberShopInfoInputCard"
import { DetailedHTMLProps, FormHTMLAttributes } from "react"


import { Button } from "@/components/Buttons/Button"
import { DividerNoText } from "@/components/DividerNoText"
import { LocaleIcon } from "@/components/icons/LocaleIcon"
import { SaveIcon } from "@/components/icons/SaveIcon"
import { FileInput } from "@/components/inputs/FileInput"
import { LabelInput } from "@/components/inputs/LabelInput"
import { NameInput } from "@/components/inputs/NameInput"
import { PhoneInput } from "@/components/inputs/PhoneInput"
import { TextArea } from "@/components/inputs/TextArea"


interface IFormBodyCardProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    barberShopInfos: IBarberShopInfos,
    setIsEditing: () => void
}

export const FormBodyCard = ({ barberShopInfos, setIsEditing, className, ...otherProps }: IFormBodyCardProps) => {

    const { name, phone, address } = barberShopInfos
    return (

        <form className={` ${className}`} {...otherProps}>
            <div className="card-body">
                <div className="flex flex-col items-center justify-center gap-1">
                    <FileInput label="Imagem de perfil:" />
                    <NameInput
                        defaultValue={name}
                    />
                    <PhoneInput
                        defaultValue={phone}
                    />
                </div>
                <DividerNoText />
                <h2 className="card-title"><LocaleIcon />Endereço</h2>
                <div className="flex flex-col items-center justify-center gap-1">
                    <LabelInput label="CEP:" placeholder="00000-00" defaultValue={address.zipcode} />
                    <LabelInput label="País:" placeholder="Brasil" defaultValue={address.country} />
                    <LabelInput label="Estado:" placeholder="Brasilia" defaultValue={address.state} />
                    <LabelInput label="Cidade:" placeholder="DF" defaultValue={address.city} />
                    <LabelInput label="Rua:" placeholder="Qs 08 Conjunto 3A" defaultValue={address.street} />
                    <LabelInput label="Número:" placeholder="09" defaultValue={address.number} />
                    <TextArea label="Complemento:" placeholder="Adicione um complemento ao seu endereço" defaultValue={address.complement} />
                </div>
                <div className="card-actions justify-end">
                    <Button className="w-auto" variant="primary" onClick={setIsEditing}>
                        <SaveIcon responsive />
                        Salvar
                    </Button>
                </div>
            </div>
        </form>

    )
}