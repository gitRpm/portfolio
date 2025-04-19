import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      className="py-1.5 px-3 bg-[var(--color-mint-400)] text-[var(--color-background)] font-semibold rounded-sm shadow-md hover:bg-[var(--color-mint-200)] focus:outline-none disabled:opacity-50 hover:cursor-pointer transition duration-200 ease-in-out text-base"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
