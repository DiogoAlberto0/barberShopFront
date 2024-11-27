import { BackButton } from "@/components/BackButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AddIcon } from "@/components/icons/AddIcon";
import { MenuItem } from "@/components/Menu/MenuItem";
import { MenuLg } from "@/components/Menu/MenuLg";

const menuItems = [
    {
        title: 'Barbearia 1',
        href: `/manager/barberShops/${1}`
    },
    {
        title: 'Barbearia 2',
        href: `/manager/barberShops/${2}`
    },
    {
        title: 'Barbearia 3',
        href: `/manager/barberShops/${3}`
    },
    {
        title: 'Barbearia 4',
        href: `/manager/barberShops/${4}`
    },
    {
        title: 'Barbearia 5',
        href: `/manager/barberShops/${5}`
    },
    {
        title: 'Barbearia 6',
        href: `/manager/barberShops/${6}`
    },
    {
        title: 'Barbearia 7',
        href: `/manager/barberShops/${7}`
    },
    {
        title: 'Barbearia 8',
        href: `/manager/barberShops/${8}`
    },
    {
        title: 'Barbearia 9',
        href: `/manager/barberShops/${9}`
    },
    {
        title: 'Barbearia 10',
        href: `/manager/barberShops/${10}`
    },
    {
        title: 'Barbearia 10',
        href: `/manager/barberShops/${10}`
    },
    {
        title: 'Barbearia 10',
        href: `/manager/barberShops/${10}`
    },
    {
        title: 'Barbearia 10',
        href: `/manager/barberShops/${10}`
    },

]
export default function BarberShopsPage() {
    return (
        <div className="w-full flex flex-col items-center gap-1 mx-auto">
            <BackButton />
            <Breadcrumbs
                items={[
                    { title: 'Dashboard', href: '/manager/dashboard' },
                    { title: 'Barbearias' },
                ]}

            />

            <MenuLg
                items={menuItems}
                className="w-full md:w-2/3"
            >
                <MenuItem href="/manager/create/barberShop">
                    <AddIcon />
                    Adicionar
                </MenuItem>
            </MenuLg>

        </div>
    )
}