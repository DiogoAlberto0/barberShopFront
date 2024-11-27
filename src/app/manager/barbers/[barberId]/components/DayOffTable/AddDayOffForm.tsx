import { DetailedHTMLProps, FormHTMLAttributes } from "react"

import { Button } from "@/components/Buttons/Button"
import { DateInput } from "@/components/inputs/DateInput"

interface IAddDayOffForm extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    onSubmit: () => void,
    onCancel: () => void
}
export const AddDayOffForm = ({ onSubmit, onCancel, className, ...ohterProps }: IAddDayOffForm) => {
    return (
        <form
            className={`w-full flex flex-col gap-2 p-4 ${className}`.trim()}
            {...ohterProps}
        >
            <DateInput />

            <div className="w-full flex justify-between">
                <Button onClick={onSubmit} className="w-auto" variant="error">
                    Cancelar
                </Button>

                <Button onClick={onCancel} className="w-auto" variant="primary">
                    Salvar
                </Button>
            </div>

        </form >
    )
}