import React from "react";

import "./style.scss";

type ButtonProps = {
  label: string;
  variant: "solid" | "outline" | "normal" | "solid-primary";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<ButtonProps> = ({ label, variant, onClick, disabled = false }) => {
  const handleClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <>
      <button onClick={handleClick} className={`button ${variant}`} disabled={disabled}>
        {label}
        <div className="button__overlay"></div>
      </button>
    </>
  );
};

export default Button;
