import {FC} from "react";


interface ButtonProps {
    className?: string;
    title: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
}

export const Button: FC<ButtonProps> = ({title, className, onClick, type}) => {

    return (
        <button type={type} className={className} onClick={onClick}>{title}</button>
    );
};