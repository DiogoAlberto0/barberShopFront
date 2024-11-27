'use client'
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import { MercadoPagoIcon } from "../icons/MercadoPagoIcon";


interface IMercadoPagoButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

const colorStyles = 'bg-blue-400 text-white transition-all duration-500'


export const MercadoPagoButton = ({ onClick }: IMercadoPagoButtonProps) => {

    const [isLoading, setisLoading] = useState(false)

    return (
        <button
            onClick={(e) => {
                setisLoading(!isLoading)
                if (onClick != undefined) {
                    onClick(e)
                }
            }}
            className={`
                w-fit relative 
                text-xs 
                px-6 py-3 rounded-lg 
                overflow-hidden
                ${colorStyles}    
            `}
        >
            <span className="flex gap-2 items-center text-center relative z-10">
                <MercadoPagoIcon />
                <p className="">Pagar com Mercado Pago</p>
            </span>
            <span
                className={`absolute inset-0 bg-blue-500 transition-transform duration-1000 ${!isLoading ? "translate-x-0" : "translate-x-full"
                    }`}
            ></span>
        </button>
    )
}