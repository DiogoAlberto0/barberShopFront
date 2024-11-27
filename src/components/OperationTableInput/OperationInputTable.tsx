'use client'

import { DetailedHTMLProps, TableHTMLAttributes } from "react"
import { TableHead } from "./Header"
import { TableRow } from "./Row"


type IOp = {
    isClosed: boolean,
    openTime: {
        hour: number,
        minute: number
    },
    closeTime: {
        hour: number,
        minute: number
    }
}
type IOperation = {
    0: IOp,
    1: IOp,
    2: IOp,
    3: IOp,
    4: IOp,
    5: IOp,
    6: IOp
}
interface IBarberOperationTableInputProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    operation: IOperation,
    barberShop: boolean
}


export const OperationTableInput = ({ barberShop, operation, className, ...otherProps }: IBarberOperationTableInputProps) => {

    const operationArray = Object.entries(operation)

    return (
        <div className={`overflow-auto w-full max-[400px]:max-w-[85vw] ${className}`}>
            <table
                className={`table table-zebra table-xs min-[875px]:table-md `}
                {...otherProps}
            >
                <TableHead barberShop={barberShop} />
                <tbody>
                    {
                        operationArray.map(([key, value], index) => (
                            <TableRow
                                key={index}
                                isClosed={value.isClosed}
                                openHour={value.openTime.hour}
                                openMinute={value.openTime.minute}
                                closeHour={value.closeTime.hour}
                                closeMinute={value.closeTime.minute}
                                day={Number(key)}
                            />
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}