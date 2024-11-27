'use client'
//next
import { DetailedHTMLProps, HTMLAttributes, useState } from "react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

//components
import { PhoneIcon } from "@/components/icons/PhoneIcon"
import { IdentityIcon } from "@/components/icons/IdentityIcon"
import { EditIcon } from "@/components/icons/EditIcon"
import { FileInput } from "@/components/inputs/FileInput"
import { PhoneInput } from '@/components/inputs/PhoneInput';
import { CpfInput } from '../../../../../components/inputs/CpfInput';
import { SaveIcon } from "@/components/icons/SaveIcon"
import { NameInput } from "@/components/inputs/NameInput"
import { IconTextButton } from "@/components/Buttons/IconTextButton"

interface IPersonalInfoCard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imageHref: string | StaticImport,
    name: string,
    phone: string,
    cpf: string,
    setIsEditing?: () => void
}

const Infos = ({ imageHref, name, phone, cpf, setIsEditing }: IPersonalInfoCard) => {
    return (
        <>
            <figure>
                <Image
                    src={imageHref}
                    alt="Shoes"
                    className="h-48 object-cover object-center"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex items-center justify-center gap-1">
                    <PhoneIcon />
                    <p>{phone}</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <IdentityIcon />
                    <p>{cpf}</p>
                </div>
                <div className="card-actions justify-end">
                    <IconTextButton className="w-auto" variant="primary" onClick={setIsEditing}>
                        <EditIcon />
                        Editar
                    </IconTextButton>
                </div>
            </div>
        </>
    )
}

const Form = ({ imageHref, name, phone, cpf, setIsEditing }: IPersonalInfoCard) => {
    return (
        <>
            <figure>
                <Image
                    src={imageHref}
                    alt="Shoes"
                    className="h-48 object-cover object-center"
                />
            </figure>
            <form action="">
                <div className="card-body">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <FileInput label="Imagem de perfil:" />
                        <NameInput
                            defaultValue={name}
                        />
                        <PhoneInput
                            defaultValue={phone}
                        />
                        <CpfInput
                            defaultValue={cpf}
                        />
                    </div>
                    <div className="card-actions justify-end">
                        <IconTextButton className="w-auto" variant="primary" onClick={setIsEditing}>
                            <SaveIcon />
                            Salvar
                        </IconTextButton>
                    </div>
                </div>
            </form>
        </>
    )
}
export const PersonalInfosCard = ({ imageHref, name, phone, cpf, className, ...otherProps }: IPersonalInfoCard) => {

    const [isEditing, setIsEditing] = useState(false)

    return (
        <div
            className={`card bg-base-100 w-96 shadow-xl ${className}`}
            {...otherProps}>
            {
                isEditing ?
                    <Form name={name} phone={phone} cpf={cpf} imageHref={imageHref} setIsEditing={() => setIsEditing(false)} />
                    :
                    <Infos name={name} phone={phone} cpf={cpf} imageHref={imageHref} setIsEditing={() => setIsEditing(true)} />
            }
        </div>
    )
}