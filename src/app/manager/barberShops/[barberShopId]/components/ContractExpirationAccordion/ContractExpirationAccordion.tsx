'use client';
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Accordion } from "@/components/Accordion";
import { DividerNoText } from "@/components/DividerNoText";
import { ExpirationDateCard } from "./DateCard/DateCard";
import { RenovationCard } from "./RenovationCard";

interface IContractExpirationAccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }



export const ContractExpirationAccordion = ({ }: IContractExpirationAccordionProps) => {
    const contractDate = new Date();
    contractDate.setMonth(new Date().getMonth() - 2);



    return (
        <Accordion title="Contrato">
            <ExpirationDateCard date={contractDate} />

            <DividerNoText />

            <RenovationCard />
        </Accordion>
    );
};
