import { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-cyan-400 hover:bg-cyan-300 text-black",

    secondary:
      "bg-blue-600 hover:bg-blue-500 text-white",

    outline:
      "border border-white/10 bg-white/5 hover:bg-white/10 text-white",
  };

  return (
    <button
      className={`
        h-12 px-6 rounded-xl
        font-semibold
        transition-all duration-200
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}