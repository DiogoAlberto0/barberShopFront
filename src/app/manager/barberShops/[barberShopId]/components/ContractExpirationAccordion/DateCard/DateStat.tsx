import { Stat } from "@/components/Stat/Stat"
import { StatDescription } from "@/components/Stat/StatDescription"
import { StatTitle } from "@/components/Stat/StatTitle"
import { StatValue } from "@/components/Stat/StatValue"
import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IDateStatProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    date: Date
}
export const DateStat = ({ date, ...otherProps }: IDateStatProps) => {
    return (
        <Stat {...otherProps}>
            <StatTitle>Expiração</StatTitle>
            <StatValue>
                {date.toLocaleDateString("pt-BR", { year: "2-digit", month: "2-digit", day: "2-digit" })}
            </StatValue>
            <StatDescription>
                {date.getUTCDate()} de {date.toLocaleDateString("pt-BR", { month: "long" })} de {date.getFullYear()}
            </StatDescription>
        </Stat>
    )
}