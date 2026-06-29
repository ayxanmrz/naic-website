"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { formDataSchema, FormData } from "./schema";
import StepOne from "./Step1";
import StepTwo from "./Step2";

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formDataSchema),

    mode: "onSubmit",
  });

  const stepFields: (keyof FormData)[][] = [
    ["purpose"],
    ["fullName", "email", "phone", "cv", "motivationLetter"],
  ];

  const nextStep = async () => {
    const fieldsToValidate = stepFields[currentStep];
    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid && currentStep < 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log("Final Form Data:", data);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <MaxWidthWrapper className="py-24 flex flex-col">
      <div className="relative isolate mb-12 text-center md:text-left">
        <div className="absolute top-1/2 left-0 md:left-1/4 transform -translate-y-1/2 size-96 bg-[#8783e5]/20 rounded-full mix-blend-screen filter blur-[100px] -z-10"></div>

        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1]">
          Müraciətlərin{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            qəbulu
          </span>
        </h2>
      </div>

      <div className="bg-[#141414] rounded-[2rem] p-8 md:p-12 w-full mx-0 shadow-2xl relative">
        <p className="text-white/50 text-sm font-medium mb-4">
          Addım {currentStep + 1}
        </p>
        <h3 className="text-2xl md:text-[28px] font-bold text-white mb-10">
          {currentStep === 0
            ? "Müraciət məqsədini seçin"
            : "Şəxsi məlumatlarınızı daxil edin"}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {currentStep === 0 && (
            <StepOne setValue={setValue} watch={watch} errors={errors} />
          )}
          {currentStep === 1 && (
            <StepTwo setValue={setValue} register={register} errors={errors} />
          )}

          {/* Controls Container */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/5 transition-all"
              >
                <ArrowLeft size={18} /> Geri
              </button>
            )}

            {currentStep < 1 ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
                className="flex items-center gap-2 bg-brand-gradient text-black font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap w-max"
              >
                Növbəti <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-brand-gradient text-black font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 whitespace-nowrap w-max"
              >
                {isSubmitting ? "Göndərilir..." : "Təsdiqlə"}
              </button>
            )}
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
}
