import type { ComponentProps } from "react";
import style from "./button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
}

const Button = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) => {

    const buttonClasses = [
        style.button,
        style[`button--${variant}`],
        style[`button--${size}`],
        className
    ].join(" ");

    return (
        <button
            className={buttonClasses}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
