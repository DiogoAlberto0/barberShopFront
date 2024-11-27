import { DetailedHTMLProps, TableHTMLAttributes } from "react"

import { IconTextButton } from "../Buttons/IconTextButton"
import { TrashIcon } from "../icons/TrashIcon"
import { IconButton } from "../Buttons/IconButton"

interface Holiday {
    date: Date,
    openTime: {
        hour: number,
        minute: number
    },
    closeTime: {
        hour: number,
        minute: number
    },
    isOpened: boolean

}
interface IHolidayTable extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    holidays: Holiday[]
    isEditing: boolean
}

interface IHolidayTableRow {
    isEditing: boolean,
    holiday: Holiday
}


const toStringTime = (hour?: number, minute?: number) => {
    if (hour != undefined && minute != undefined) return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
    else return '--:--'
}

const HolidayTableRow = ({ holiday, isEditing }: IHolidayTableRow) => {
    return (
        <tr>
            <th>{holiday.date.toLocaleDateString('pt-BR', { year: "2-digit", month: "numeric", day: "2-digit" })}</th>
            <td
                className="max-[500px]:hidden"
            >{holiday.date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace(/\./g, "")}</td>
            <td>{holiday.isOpened ? toStringTime(holiday.openTime.hour, holiday.openTime.minute) : toStringTime()}</td>
            <td>{holiday.isOpened ? toStringTime(holiday.closeTime.hour, holiday.closeTime.minute) : toStringTime()}</td>
            {
                isEditing &&
                <td className="flex items-center justify-center">
                    <IconButton responsive variant="error">
                        <TrashIcon responsive />
                    </IconButton>
                </td>
            }
        </tr>
    )
}
export const HolidayTable = ({ holidays, isEditing = false, className, ...otherProps }: IHolidayTable) => {
    return (
        <div
            className="overflow-x-auto w-full max-w-[calc(100vw-3rem)]"
        >
            <table
                className={`w-full table table-zebra max-[500px]:table-xs ${className}`}
                {...otherProps}
            >
                {/* head */}
                <thead>
                    <tr>
                        <th className="w-18">Data</th>
                        <th className="w-14 max-[500px]:hidden">Dia</th>
                        <th className="w-1/2">Abert.</th>
                        <th className="w-1/2">Fech.</th>
                        {isEditing && <th className="w-14 max-[500px]:w-14">Apagar</th>}
                    </tr>
                </thead>
                <tbody>
                    {holidays.map((holiday, index) => (
                        <HolidayTableRow key={index} isEditing={isEditing} holiday={holiday} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
