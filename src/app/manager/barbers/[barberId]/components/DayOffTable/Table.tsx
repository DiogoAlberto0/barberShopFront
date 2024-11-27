'use client'
import { DetailedHTMLProps, HTMLAttributes, useState } from "react"

import { AddIcon } from "@/components/icons/AddIcon";
import { AddDayOffForm } from "./AddDayOffForm";
import { AddDayOffTableHead } from "./Head";
import { AddDayOffTableRow } from "./Row";
import { IconButton } from "@/components/Buttons/IconButton";


interface IDayOffTableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

const holidays = [
    {
        date: new Date()
    },
    {
        date: new Date()
    },
]
export const DayOffTable = ({ className, ...otherProps }: IDayOffTableProps) => {

    const [isAdding, setIsAdding] = useState(false)

    return (
        <div
            className={`flex flex-col gap-2 overflow-auto w-full max-[400px]:max-w-[85vw] ${className}`.trim()}
            {...otherProps}
        >
            <div className="flex items-center justify-between px-4">
                <h1 className="text-xl">Folgas</h1>
                <IconButton onClick={() => setIsAdding(prevState => !prevState)} variant="primary">
                    <AddIcon />
                </IconButton>
            </div>
            {
                isAdding && <AddDayOffForm onSubmit={() => setIsAdding(false)} onCancel={() => setIsAdding(false)} />
            }
            <table className="table table-zebra">

                <AddDayOffTableHead />
                <tbody>
                    {
                        holidays.map((holiday, index) => (
                            <AddDayOffTableRow key={index} date={holiday.date} onDelete={() => { confirm('Tem certeza que deseja apagar essa folga?') }} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}