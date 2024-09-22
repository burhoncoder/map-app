import { ButtonProps } from "./Button.types.ts";

export const Button = ({ children, onClick, type, className }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`rounded-lg bg-blue-500 p-2 text-white ${className || ""}`}
    >
      {children}
    </button>
  );
};
