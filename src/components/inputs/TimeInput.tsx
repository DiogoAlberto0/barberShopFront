import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface ITimeInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
}

export const TimeInput = ({ children, variant = 'primary', className, ...props }: ITimeInputProps) => {
    return (
        <label
            className={`input input-bordered max-[500px]:input-sm input-${variant} flex justify-center items-center ${className}`.trim()}
        >
            {children}
            <input
                type="time"
                className="grow"
                {...props}
            />
        </label>
    );
};
