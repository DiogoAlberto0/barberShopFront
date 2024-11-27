import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MenuLg } from "@/components/Menu/MenuLg";

const menuItems = [
    {
        title: 'Barbearias',
        href: '/manager/barberShops'
    },
    {
        title: 'Barbeiros',
        href: '/manager/barbers'
    },

]
export default async function Dashboard() {
    return (
        <div className="w-full flex flex-col items-center gap-1 mx-auto">
            <Breadcrumbs
                items={[{ title: 'Dashboard' }]}

            />

            <MenuLg
                items={menuItems}
                className="w-full md:w-2/3"
            />

        </div>
    )
}