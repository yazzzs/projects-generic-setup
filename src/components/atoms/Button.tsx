import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  onClick,
  children,
  disabled = false,
  className = "",
}) => {
  const baseClasses =
    "cursor-pointer rounded focus:outline-none transition-all font-cormorant uppercase tracking-widest duration-300";
  const sizeClasses = {
    small: "px-3 py-1",
    medium: "px-4 py-2",
    large: "px-6 py-3",
  };
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-darker",
    secondary: "bg-black/40 text-primary hover:bg-black/50",
  };
  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`${className} ${baseClasses} ${sizeClasses[size]} ${
        variantClasses[variant]
      } ${disabled && disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
