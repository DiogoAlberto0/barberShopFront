'use client'

// components
import { MercadoPagoButton } from "@/components/Buttons/MercadoPagoButton"
import { Collapse } from "@/components/Collapse"
import { LabelInput } from "@/components/inputs/LabelInput"
import { Stat } from "@/components/Stat/Stat"
import { StatDescription } from "@/components/Stat/StatDescription"
import { Stats } from "@/components/Stat/Stats"
import { StatTitle } from "@/components/Stat/StatTitle"
import { StatValue } from "@/components/Stat/StatValue"
import { useState } from "react"



export const RenovationCard = () => {

    const [months, setMonths] = useState(1)

    const price = 40

    return (
        <Collapse title="Renovar Contrato">
            <Stats>
                <Stat>
                    <StatTitle>Total:</StatTitle>
                    <StatValue variant="success">R${(price * months).toFixed(2).replace('.', ',')}</StatValue>
                    <StatDescription>Quantidade: {months}</StatDescription>
                </Stat>
            </Stats>

            <LabelInput
                label="Meses:"
                type="number"
                value={months}
                onChange={(e) => {
                    const number = Number(e.target.value)
                    if (number < 0) { setMonths(1) } else setMonths(number)
                }}
            />
            <MercadoPagoButton />
        </Collapse>
    )
}