import React, { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  size?: "xs" | "small" | "medium" | "large";
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  defaultValue,
  onChange,
  size = "medium",
  disabled = false,
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((option) => option.value === defaultValue) || null
  );

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const sizeClasses = () => {
    switch (size) {
      case "xs":
        return "w-16 px-3 py-1 border-none";
      case "small":
        return "w-1/4 px-2 py-1";
      case "medium":
        return "w-1/2 px-4 py-2";
      case "large":
        return "w-3/4 px-6 py-3";
      default:
        return "w-1/2 px-4 py-2";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className={`relative rounded shadow-sm text-sm bg-black/40 ${sizeClasses()} ${
        disabled ? "text-gray-300" : "text-white"
      }`}
    >
      <button
        className={`cursor-pointer w-full text-left disabled:cursor-not-allowed flex justify-between items-center`}
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={disabled}
      >
        {selectedOption
          ? selectedOption.label
          : placeholder || "Select an option"}
        <Icon
          iconName={isOpen ? "AscendArrow" : "DescendArrow"}
          className="cursor-pointer"
          size={18}
        />
      </button>
      <ul
        className={`${
          isOpen ? "max-h-60" : "max-h-0"
        } absolute left-0 z-100 w-full bg-background rounded shadow-lg transition-all duration-300 overflow-hidden`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className="px-4 py-2 cursor-pointer hover:bg-black/30"
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
