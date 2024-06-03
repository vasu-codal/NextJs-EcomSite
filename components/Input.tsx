"use client";
import React from "react";

interface CommentInputProps {
  id: string;
  placeholder: string;
  name: string;
  onChange: () => void;
  disabled?: boolean;
  inputType: string;
  autoComplete?: string;
  lableName: string;
}

const Input: React.FC<CommentInputProps> = ({
  id,
  placeholder,
  name,
  disabled = false,
  onChange,
  inputType,
  autoComplete = "off",
  lableName,
}) => {
  return (
    <div className="w-full">
      <label
        className="
          cursor-text
          text-md
          text-slate-600
        "
      >
        {lableName}
      </label>
      <input
        autoComplete={autoComplete}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        className="
          w-full
          p-2
          outline-none
          bg-white 
          font-light 
          border-2
          rounded-md
          disabled:opacity-70
          disabled:cursor-not-allowed
          border-slate-300
          focus:border-slate-400
        "
        type={inputType}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
