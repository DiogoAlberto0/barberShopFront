import { BackButton } from "@/components/BackButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DoubleButton } from "@/components/Buttons/DoubleButton";
import { CpfInput } from "@/components/inputs/CpfInput";
import { FileInput } from "@/components/inputs/FileInput";
import { NameInput } from "@/components/inputs/NameInput";
import { PasswordInput } from "@/components/inputs/PasswordInput";
import { PhoneInput } from "@/components/inputs/PhoneInput";
import { SelectInput } from "@/components/inputs/SelectInput";




export default function CreateBarberPage() {
    return (
        <div className="h-full w-full flex flex-col items-center">

            <Breadcrumbs
                items={[
                    { title: 'dashboard', href: '/manager/dashboard' },
                    { title: 'barbeiros', href: '/manager/barbers' },
                    { title: 'adicionar barbeiro' },
                ]}
            />

            <BackButton />

            <form action="" className="h-full overflow-auto gap-2 flex flex-col justify-between w-full md:w-2/3 ">
                <h1 className="text-xl text-center">Adicionar Barbeiro</h1>
                <FileInput label="Foto de perfil" />

                <NameInput />

                <PhoneInput />

                <CpfInput />

                <PasswordInput placeholder="Senha" />

                <PasswordInput placeholder="Confirmar senha" />

                <SelectInput placeholder="Selecione a barbearia">
                    <option value="1234">BarberShop 1</option>
                    <option value="1234">BarberShop 2</option>
                </SelectInput>

                <DoubleButton />
            </form>
        </div>
    )
}