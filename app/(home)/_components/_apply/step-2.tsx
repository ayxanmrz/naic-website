"use client";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { FormData } from "./schema";
import Input from "@/components/ui/Input";
import { FileText, Mail, Phone, User } from "lucide-react";
import formatAzerbaijanPhone from "@/lib/formatPhoneNumber";
import { useEffect } from "react";

interface StepTwoProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  setValue: UseFormSetValue<FormData>;
}

export default function StepTwo({ register, errors, setValue }: StepTwoProps) {
  useEffect(() => {
    console.log("Errors in StepTwo:", errors);
  }, [errors]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Input
          type="text"
          label="Ad Soyad"
          register={register}
          errors={errors}
          name="fullName"
          placeholder="John Doe"
          icon={<User strokeWidth={1.5} />}
        />
      </div>
      <div>
        <Input
          type="email"
          label="E-poçt"
          register={register}
          errors={errors}
          name="email"
          placeholder="example@domain.com"
          icon={<Mail strokeWidth={1.5} />}
        />
      </div>
      <div>
        <Input
          type="tel"
          label="Telefon nömrəsi"
          register={register}
          errors={errors}
          onChange={(e) => {
            const formatted = formatAzerbaijanPhone(e.target.value);

            setValue("phone", formatted, {
              shouldValidate: true,
              shouldDirty: true,
            });
          }}
          name="phone"
          placeholder="+994"
          icon={<Phone strokeWidth={1.5} />}
        />
      </div>
      <div>
        <Input
          type="file"
          label="CV Faylı"
          register={register}
          errors={errors}
          name="cv"
          icon={<FileText strokeWidth={1.5} />}
        />
      </div>
      <div className="lg:col-start-2 lg:row-start-1 lg:row-end-5">
        <Input
          {...register("motivationLetter")}
          label="Motivasiya məktubu"
          register={register}
          errors={errors}
          name="motivationLetter"
          type="textarea"
          inputClassName="h-full! resize-none"
          placeholder="Özünüz haqqında məlumat..."
        />
      </div>{" "}
    </div>
  );
}
