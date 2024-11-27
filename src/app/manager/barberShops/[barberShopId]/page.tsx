import { BackButton } from "@/components/BackButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OperationAccordion } from "./components/BarberOperationAccordion";
import { HolidaysAccordion } from './components/HolidaysAccordion';
import { ContractExpirationAccordion } from "./components/ContractExpirationAccordion/ContractExpirationAccordion";


// barber shop infos
import BarberShopLogoImage from '@/../public/Logo.jpg'
import { BarberShopInfoInputCard } from "./components/BarberShopInfoCardInput/BarberShopInfoInputCard";
import { PageProps } from "../../../../../.next/types/app/layout";

interface BarberShopByIdPageProps extends PageProps {
    params: Promise<{ barberShopId: string }>
}

const barberShopInfos = {
    imageUrl: BarberShopLogoImage,
    name: 'Barber Shop Name',
    phone: '(61) 99999-9999',
    address: {
        country: 'Brasil',
        state: 'Brasilia',
        city: 'DF',
        neighborhood: 'Riacho Fundo 1',
        street: 'Qs 08 Conjunto 3A',
        number: 9,
        complement: 'casa 9',
        zipcode: '71805709',
    }
}
export default async function BarberShopByIdPage({
    params
}: BarberShopByIdPageProps) {

    const { barberShopId } = await params

    console.log(barberShopId)
    return (
        <div className="flex flex-col items-center relative w-full">
            <BackButton />
            <Breadcrumbs
                items={[
                    { title: 'Dashboard', href: '/manager/dashboard' },
                    { title: 'Barbearias', href: '/manager/barberShops' },
                    { title: 'Barbearia Corte Bonito' }
                ]}
                className="w-full"
            />

            <div className="flex flex-col gap-2 w-full md:w-2/3">

                <BarberShopInfoInputCard
                    barberShopInfos={barberShopInfos}
                    className="w-full"
                />

                <OperationAccordion />

                <HolidaysAccordion />

                <ContractExpirationAccordion />
            </div>
        </div>
    )
}