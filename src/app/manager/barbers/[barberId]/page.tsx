
import { DayOffTable } from "./components/DayOffTable/Table"
import { OperationTableInput } from "@/components/OperationTableInput/OperationInputTable"
import { PersonalInfosCard } from "./components/PersonalInfosCard"

import imagemHomemTest from '@/../public/imagemHomemTeste.jpg'
import { BackButton } from "@/components/BackButton"
import { Breadcrumbs } from '@/components/Breadcrumbs';


const barberInfos = {
    id: '1234',
    name: 'Diogo Alberto',
    phone: '(61) 986548270',
    cpf: '071.568.171-08'
}

const barberOperation = {
    0: {
        isClosed: false,
        openTime: {
            hour: 8,
            minute: 0
        },
        closeTime: {
            hour: 18,
            minute: 0
        }
    },
    1: {
        isClosed: false,
        openTime: {
            hour: 8,
            minute: 0
        },
        closeTime: {
            hour: 18,
            minute: 0
        }
    },
    2: {
        isClosed: false,
        openTime: {
            hour: 8,
            minute: 0
        },
        closeTime: {
            hour: 18,
            minute: 0
        }
    },
    3: {
        isClosed: false,
        openTime: {
            hour: 8,
            minute: 0
        },
        closeTime: {
            hour: 18,
            minute: 0
        }
    },
    4: {
        isClosed: false,
        openTime: {
            hour: 8,
            minute: 0
        },
        closeTime: {
            hour: 18,
            minute: 0
        }
    },
    5: {
        isClosed: false,
        openTime: {
            hour: 8,
            minute: 0
        },
        closeTime: {
            hour: 18,
            minute: 0
        }
    },
    6: {
        isClosed: true,
        openTime: {
            hour: 0,
            minute: 0
        },
        closeTime: {
            hour: 0,
            minute: 0
        }
    }
}


export default async function BarberByIdPage({
    params
}: { params: Promise<{ barberId: string }> }) {

    const { barberId } = await params

    console.log(barberId)
    return (
        <div className="flex flex-col items-center relative">
            <BackButton />
            <Breadcrumbs
                items={[
                    { title: 'Dashboard', href: '/manager/dashboard' },
                    { title: 'Barbeiros', href: '/manager/barbers' },
                    { title: barberInfos.name }
                ]}
                className="w-full"
            />
            <PersonalInfosCard
                imageHref={imagemHomemTest}
                name={barberInfos.name}
                cpf={barberInfos.cpf}
                phone={barberInfos.phone}
                className="w-full md:w-2/3"
            />

            <div className="divider"></div>

            <OperationTableInput
                barberShop={false}
                operation={barberOperation}
                className="w-full md:w-2/3"
            />

            <div className="divider"></div>

            <DayOffTable className="w-full md:w-2/3" />
        </div>


    )
}