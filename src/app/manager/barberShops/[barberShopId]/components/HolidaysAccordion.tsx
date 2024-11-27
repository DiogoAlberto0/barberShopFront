import { DetailedHTMLProps, HTMLAttributes } from "react"

import { Accordion } from "@/components/Accordion"
import { HolidayTable } from '../../../../../components/Holiday/HolidayTable';
import { HolidayForm } from "@/components/Holiday/HolidayForm";

interface IHolidaysAccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: string
}

const holidays = [
    {
        date: new Date(),
        openTime: {
            hour: 8,
            minute: 0
        },
        closeTime: {
            hour: 12,
            minute: 0
        },
        isOpened: true
    },
    {
        date: new Date(),
        openTime: {
            hour: 0,
            minute: 0
        },
        closeTime: {
            hour: 0,
            minute: 0
        },
        isOpened: false
    }
]
export const HolidaysAccordion = ({ }: IHolidaysAccordionProps) => {
    return (
        <Accordion title="Feriados">
            <HolidayTable isEditing={true} holidays={holidays} />
            <HolidayForm />
        </Accordion>
    )
}