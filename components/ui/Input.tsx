"use client";

import { useRef } from "react";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: any; // Use the correct type for register from react-hook-form
  errors: any;
  icon?: React.ReactNode;
  labelClassName?: string;
  inputClassName?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

function Input({
  label,
  name,
  type = "text",
  placeholder,
  register,
  errors,
  icon,
  labelClassName,
  inputClassName,
  onChange,
  ...rest
}: InputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    onChange: rhfOnChange,
    ref: rhfRef,
    ...registerRest
  } = register(name);
  function inputType(type: HTMLInputElement["type"]) {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            placeholder={label}
            {...register(name)}
            {...rest}
            onChange={(e) => {
              rhfOnChange(e);
              if (onChange) onChange(e);
            }}
            className={`w-full bg-[#1A1A1A] px-5 py-4 text-start! relative z-20  rounded-xl  text-white outline-none text-sm peer ${inputClassName || ""}`}
          />
        );
      case "file":
        return (
          <>
            <input
              id={name}
              placeholder={label}
              {...rest}
              onClick={(e) => {
                console.log("file input clicked", fileInputRef.current);
                if (fileInputRef.current) {
                  fileInputRef.current.click();
                }
              }}
              readOnly
              value={fileInputRef.current?.files?.[0]?.name || ""}
              className={`w-full cursor-pointer bg-[#1A1A1A] px-5 py-4 text-start! relative z-20  rounded-xl  text-white outline-none text-sm peer ${inputClassName || ""} ${icon ? "pr-12" : ""}`}
            />
            <input
              name={name}
              {...register(name)}
              className="hidden"
              type="file"
              ref={(el) => {
                register(name).ref(el); // RHF gets the ref
                fileInputRef.current = el; // You get the ref
              }}
            />
          </>
        );

      default:
        return (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={label}
            {...register(name)}
            {...rest}
            onChange={(e) => {
              rhfOnChange(e);
              if (onChange) onChange(e);
            }}
            className={`w-full bg-[#1A1A1A] px-5 py-4 text-start! relative z-20  rounded-xl  text-white outline-none text-sm peer ${inputClassName || ""} ${icon ? "pr-12" : ""}`}
          />
        );
    }
  }

  return (
    <div className="flex h-full flex-col">
      {/* <label
        htmlFor={name}
        className={`block text-white/70 text-sm font-medium ${labelClassName || "text-gray-700"}`}
      >
        {label}
      </label> */}
      <div className="relative p-px mt-1 flex-1 min-h-0">
        {inputType(type)}
        <div className="absolute -inset-[0.5px] rounded-[15px] bg-brand-gradient z-10 opacity-50 peer-focus:opacity-100 transition " />
        {icon && (
          <div className="absolute pointer-events-none right-5 top-1/2 transform z-20 -translate-y-1/2 text-white/70 peer-focus:text-white transition">
            {icon}
          </div>
        )}
      </div>
      {errors[name] && (
        <p className="mt-2 text-sm text-(--error-300) italic animate-in fade-in duration-200">
          {errors[name].message}
        </p>
      )}
    </div>
  );
}

export default Input;
