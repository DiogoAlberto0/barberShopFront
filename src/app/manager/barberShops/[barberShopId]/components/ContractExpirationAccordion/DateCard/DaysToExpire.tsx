import { DetailedHTMLProps, HTMLAttributes } from "react"

// components
import { Stat } from "@/components/Stat/Stat"
import { StatTitle } from "@/components/Stat/StatTitle"
import { StatValue } from "@/components/Stat/StatValue"
import { StatDescription } from "@/components/Stat/StatDescription"

interface IDaysToExpireStatProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    date: Date
}

const calculateDaysBetweenDates = (startDate: Date, endDate: Date) => {
    const date1 = new Date(startDate)
    const date2 = new Date(endDate)

    const differenceInMilliseconds = date2.getTime() - date1.getTime()

    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24)

    return Math.round(differenceInDays)
}

const getStatusAndMessage = (days: number): { status: 'error' | 'alert' | 'success', message: string } => {
    if (days <= 0) return ({ status: 'error', message: 'Contrato expirado' })
    if (days <= 30) return ({ status: 'alert', message: 'Atenção' })
    else return ({ status: 'success', message: 'Contrato ativo' })


}
export const DaysToExpireStat = ({ date, ...otherProps }: IDaysToExpireStatProps) => {

    const daysBetween = calculateDaysBetweenDates(new Date(), date)
    const { status, message } = getStatusAndMessage(daysBetween)

    return (
        <Stat {...otherProps}>
            <StatTitle>Dias ate expirar:</StatTitle>
            <StatValue variant={status}>{daysBetween}</StatValue>
            <StatDescription variant={status}>{message}</StatDescription>
        </Stat>
    )
}