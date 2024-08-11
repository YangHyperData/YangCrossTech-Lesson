import { Spin } from "antd";
import React from "react";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export const AppButton = ({
    className,
    loading,
    children,
    disabled,
    onClick,
    type = "button",
    ...rest
}: AppButtonProps) => {
    return (
        <button
            className={className}
            disabled={disabled || loading}
            onClick={onClick}
            type={type}
            {...rest}
        >
            {loading ? <Spin /> : children}
        </button>
    );
};
