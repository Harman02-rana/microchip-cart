import { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`
        h-12 w-full rounded-xl
        border border-white/10
        bg-[#081225]
        px-4
        text-white
        outline-none
        focus:border-cyan-400
        transition-all
        ${className}
      `}
      {...props}
    />
  );
}