import { BackButton } from "@/components/BackButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DoubleButton } from "@/components/Buttons/DoubleButton";
import { CpfInput } from "@/components/inputs/CpfInput";
import { FileInput } from "@/components/inputs/FileInput";
import { LabelInput } from "@/components/inputs/LabelInput";
import { NameInput } from "@/components/inputs/NameInput";
import { PasswordInput } from "@/components/inputs/PasswordInput";
import { PhoneInput } from "@/components/inputs/PhoneInput";
import { SelectInput } from "@/components/inputs/SelectInput";
import { TextArea } from "@/components/inputs/TextArea";




export default function CreateBarberShopPage() {
    return (
        <div className="h-full w-full flex flex-col items-center">

            <Breadcrumbs
                items={[
                    { title: 'dashboard', href: '/manager/dashboard' },
                    { title: 'barbearia', href: '/manager/barberShops' },
                    { title: 'adicionar barbearia' },
                ]}
            />

            <BackButton />

            <form action="" className="h-full overflow-auto gap-2 flex flex-col justify-between w-full md:w-2/3 ">
                <h1 className="text-xl text-center">Adicionar Barbearia</h1>
                <FileInput label="Foto de perfil" />

                <NameInput placeholder="Nome da barbearia" />

                <PhoneInput />

                <h2 className="text-sm text-center">Endereço</h2>

                <LabelInput label="País" variant="primary" />
                <LabelInput label="Estado" variant="primary" />
                <LabelInput label="Cidade" variant="primary" />
                <LabelInput label="Bairro" variant="primary" />
                <LabelInput label="Rua" variant="primary" />
                <LabelInput label="Número" type="number" variant="primary" />
                <LabelInput label="CEP" variant="primary" />
                <TextArea label="Complemento" variant="primary" />


                <DoubleButton />
            </form>
        </div>
    )
}