import { UseFormSetValue, UseFormWatch, FieldErrors } from "react-hook-form";
import { FormData } from "./schema";
import { options } from "@/constants/applyOptions";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepOneProps {
  setValue: UseFormSetValue<FormData>;
  watch: UseFormWatch<FormData>;
  errors: FieldErrors<FormData>;
}

export default function StepOne({ setValue, watch, errors }: StepOneProps) {
  const selectedPurpose = watch("purpose");

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {options.map((option) => {
          const isSelected = selectedPurpose === option;

          return (
            <div
              key={option}
              onClick={() =>
                setValue("purpose", option, { shouldValidate: true })
              }
              className={cn(
                "relative rounded-[20px] cursor-pointer transition-all duration-300 overflow-hidden p-px",
                isSelected ? "bg-brand-gradient" : "bg-[#1A1A1A]",
              )}
            >
              <div
                className={cn(
                  "flex items-center gap-4 px-6 py-5 h-full rounded-[19px]",
                  isSelected ? "bg-[#141414]" : "bg-[#1A1A1A] hover:bg-[#222]",
                )}
              >
                {/* Custom Radio Circle */}
                <div
                  className={cn(
                    "flex items-center justify-center size-[30px] rounded-full transition-colors flex-shrink-0",
                    isSelected
                      ? "bg-[#8783e5]"
                      : "bg-[#111] border-[6px] border-[#2A2A2A]",
                  )}
                >
                  {isSelected && (
                    <Check size={16} strokeWidth={3} className="text-white" />
                  )}
                </div>

                <span className="text-white font-medium text-[16px]">
                  {option}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {errors.purpose && (
        <span className="text-sm text-red-500 mt-2">
          {errors.purpose.message}
        </span>
      )}
    </div>
  );
}
