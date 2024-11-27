'use client'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';

import { DateInput } from '@/components/inputs/DateInput';
import { Toggle } from '../inputs/Toggle';
import { IconTextButton } from '../Buttons/IconTextButton';
import { AddIcon } from '../icons/AddIcon';
import { TimeInput } from '../inputs/TimeInput';

interface IHolidayFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: string
}
export const HolidayForm = ({ className, ...otherProps }: IHolidayFormProps) => {

    const [isOpened, setIsOpened] = useState(true)

    return (
        <div
            className={`w-full flex flex-col gap-2 ${className}`}
            {...otherProps}
        >
            <h1 className='text-xl'>Adicionar feriado:</h1>

            <div className="w-full flex gap-2 max-[380px]:flex-wrap items-center justify-center">
                <DateInput className="w-full">Data:</DateInput>

                <Toggle checked={isOpened} onChange={(e) => setIsOpened(e.target.checked)}>
                    Irá abrir:
                </Toggle>
            </div>

            <div className="flex gap-2 max-[380px]:flex-wrap w-full">
                <TimeInput className="w-full" disabled={!isOpened}>
                    Abertura:
                </TimeInput>

                <TimeInput className="w-full" disabled={!isOpened}>
                    Fechamento:
                </TimeInput>
            </div>

            <IconTextButton responsive className="w-full" variant="primary">
                Adicionar <AddIcon />
            </IconTextButton>

        </div >
    )
}