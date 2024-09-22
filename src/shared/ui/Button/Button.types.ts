import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  className?: string;
  type?: "submit" | "reset" | "button";
}
