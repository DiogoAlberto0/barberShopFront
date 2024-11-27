import { DetailedHTMLProps, HTMLAttributes } from "react"
import { DaysToExpireStat } from "./DaysToExpire";
import { DateStat } from "./DateStat";
import { PricePerMonthStat } from "./PricePerMonthStat";
import { Stats } from "@/components/Stat/Stats";


interface IExpirationDateCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    date: Date
}


export const ExpirationDateCard = ({ date, ...otherProps }: IExpirationDateCardProps) => {

    return (
        <Stats
            className="max-[950px]:stats-vertical max-[765px]:stats-horizontal"
            {...otherProps}
        >
            <DaysToExpireStat date={date} />
            <DateStat date={date} />
            <PricePerMonthStat />
        </Stats>
    )
}
