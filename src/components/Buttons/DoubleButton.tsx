'use client'
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "./Button";

interface IDoubleButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onAccept?: () => void,
    onCancel?: () => void
}
export const DoubleButton = ({ onAccept, onCancel, className, ...ohterProps }: IDoubleButtonProps) => {
    return (
        <div
            className={`w-full flex flex-col md:flex-row gap-4 ${className}`}
            {...ohterProps}
        >
            <Button className="w-full md:w-[calc(50%-0.5rem)]" onClick={onAccept} variant="default">
                Cancelar
            </Button>
            <Button className="w-full md:w-[calc(50%-0.5rem)]" onClick={onCancel} variant="primary">
                Salvar
            </Button>
        </div>
    )
}