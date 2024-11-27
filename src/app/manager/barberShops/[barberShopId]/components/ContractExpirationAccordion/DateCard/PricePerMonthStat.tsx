import { Stat } from "@/components/Stat/Stat"
import { StatDescription } from "@/components/Stat/StatDescription"
import { StatTitle } from "@/components/Stat/StatTitle"
import { StatValue } from "@/components/Stat/StatValue"
import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IPricePerMonthStatProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: string
}
export const PricePerMonthStat = ({ ...otherProps }: IPricePerMonthStatProps) => {
    return (
        <Stat {...otherProps}>
            <StatTitle>Valor da renovação</StatTitle>
            <StatValue variant="success">R$40,00</StatValue>
            <StatDescription className="stat-desc">Por mês</StatDescription>
        </Stat>
    )
}