import React, { CSSProperties, MouseEventHandler } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { type } from "os";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export interface ButtonProps {
  children: React.ReactNode;
  type: "button";
  onClick: MouseEventHandler;
  buttonStyle: string;
  to: string;
}

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  to,
}: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonStyle) ? buttonStyle : SIZES[0];
  return (
    <Link to={to} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
