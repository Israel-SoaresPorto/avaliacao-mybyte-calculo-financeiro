import React from "react";

type InputFieldProps = {
  label?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  className,
  ...props
}: InputFieldProps) {
  return (
    <div className={`${className}`}>
      <label htmlFor={props.id} className="block font-medium mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-white border border-violet-600 p-2 rounded-sm"
      />
    </div>
  );
}
