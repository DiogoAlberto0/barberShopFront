import { DetailedHTMLProps, HTMLAttributes } from "react"

interface IOperationTableHead extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
    barberShop: boolean
}

export const TableHead = ({ barberShop, ...otherProps }: IOperationTableHead) => {
    return (
        <thead>
            <tr>
                <th className="w-16 max-[500px]:w-8">Dia</th>
                <th className="w-16 max-[500px]:w-8">{barberShop ? 'Aberto?:' : 'Trabalha?:'}</th>
                <th className="w-1/2">{barberShop ? 'Abert.:' : 'Entrada:'}</th>
                <th className="w-1/2">{barberShop ? 'Fech.:' : 'Saída:'}</th>
                <th className="w-14">Alterar</th>
            </tr>
        </thead>
    )
}