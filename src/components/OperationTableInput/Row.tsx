
import { EditIcon } from "@/components/icons/EditIcon"
import { TimeInput } from "@/components/inputs/TimeInput"
import { DetailedHTMLProps, HTMLAttributes, useState } from "react"
import { IconTextButton } from "../Buttons/IconTextButton"
import { Toggle } from "../inputs/Toggle"
import { IconButton } from "../Buttons/IconButton"

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

interface ITableRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    openHour: number,
    openMinute: number,
    closeHour: number,
    closeMinute: number,
    isClosed: boolean,
    day: number
}

export const TableRow = ({
    isClosed,
    openHour,
    openMinute,
    closeHour,
    closeMinute,
    day
}: ITableRowProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [isClosedState, setIsClosedState] = useState(isClosed)

    const openTimeString = `${openHour.toString().padStart(2, '0')}:${openMinute.toString().padStart(2, '0')}`
    const closeTimeString = `${closeHour.toString().padStart(2, '0')}:${closeMinute.toString().padStart(2, '0')}`

    return (
        <tr>
            <th>{weekDays[Number(day)]}</th>
            {
                isEditing
                    ?
                    <>
                        <td><Toggle checked={isClosedState} onChange={(e) => setIsClosedState(e.target.checked)} /></td>
                        <td><TimeInput defaultValue={openTimeString} /></td>
                        <td><TimeInput defaultValue={closeTimeString} /></td>
                    </>

                    :
                    <>
                        <td><Toggle checked={isClosed} onChange={() => { }} /></td>
                        <td>{openTimeString}</td>
                        <td>{closeTimeString}</td>
                    </>
            }
            <td className="flex items-center justify-center">
                <IconButton variant="primary" onClick={() => setIsEditing(prevState => !prevState)}>
                    <EditIcon responsive />
                </IconButton>
            </td>
        </tr>
    )
}