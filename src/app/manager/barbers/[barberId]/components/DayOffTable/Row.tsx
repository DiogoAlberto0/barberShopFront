import { DetailedHTMLProps, HTMLAttributes } from "react"

import { TrashIcon } from "@/components/icons/TrashIcon"
import { IconButton } from "@/components/Buttons/IconButton"

interface IAddDAyOffTableRow extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    date: Date,
    onDelete: () => void
}

export const AddDayOffTableRow = ({ onDelete, date }: IAddDAyOffTableRow) => {
    return (
        <tr>
            <th>{date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace(/\./g, "")}</th>
            <td>{date.toLocaleDateString('pt-BR')}</td>
            <td>
                <IconButton
                    variant="error"
                    onClick={onDelete}
                >
                    <TrashIcon />
                </IconButton>
            </td>
        </tr>
    )
}