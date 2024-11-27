import { Accordion } from "@/components/Accordion";
import { OperationTableInput } from "@/components/OperationTableInput/OperationInputTable"
import { DoubleButton } from '@/components/Buttons/DoubleButton';

const barberShopOperation = {
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
export const OperationAccordion = () => {
    return (
        <Accordion title="Horário de operação">
            <OperationTableInput
                barberShop
                operation={barberShopOperation}
            />
            <DoubleButton />
        </Accordion>

    )

}