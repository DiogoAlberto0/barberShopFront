import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MenuLg } from "@/components/Menu/MenuLg";
import { BackButton } from "@/components/BackButton";
import { AddIcon } from "@/components/icons/AddIcon";
import Link from "next/link";
import { MenuItem } from "@/components/Menu/MenuItem";

const menuItems = [
    {
        title: 'Barbeiro 1',
        href: `/manager/barbers/${1}`
    },
    {
        title: 'Barbeiro 2',
        href: `/manager/barbers/${2}`
    },
    {
        title: 'Barbeiro 3',
        href: `/manager/barbers/${3}`
    },
    {
        title: 'Barbeiro 4',
        href: `/manager/barbers/${4}`
    },
    {
        title: 'Barbeiro 5',
        href: `/manager/barbers/${5}`
    },
    {
        title: 'Barbeiro 6',
        href: `/manager/barbers/${6}`
    },
    {
        title: 'Barbeiro 7',
        href: `/manager/barbers/${7}`
    },
    {
        title: 'Barbeiro 8',
        href: `/manager/barbers/${8}`
    },
    {
        title: 'Barbeiro 9',
        href: `/manager/barbers/${9}`
    },
    {
        title: 'Barbeiro 10',
        href: `/manager/barbers/${10}`
    },
    {
        title: 'Barbeiro 10',
        href: `/manager/barbers/${10}`
    },
    {
        title: 'Barbeiro 10',
        href: `/manager/barbers/${10}`
    },
    {
        title: 'Barbeiro 10',
        href: `/manager/barbers/${10}`
    },

]
export default function BarbersPage() {
    return (
        <div className="w-full flex flex-col items-center gap-1 mx-auto relative">
            <BackButton />
            <Breadcrumbs
                items={[
                    { title: 'Dashboard', href: '/manager/dashboard' },
                    { title: 'Barbeiros' },
                ]}

            />

            <MenuLg items={menuItems} className="w-full md:w-2/3">
                <MenuItem href="/manager/create/barber">
                    <AddIcon />
                    Adicionar
                </MenuItem>
            </MenuLg>

        </div>
    )
}