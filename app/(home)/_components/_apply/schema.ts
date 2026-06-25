import { z } from "zod";

export const stepOneSchema = z.object({
  purpose: z.string().min(1, "Zəhmət olmasa müraciət məqsədini seçin"),
});

export const stepTwoSchema = z.object({
  fullName: z.string().min(3, "Ad və Soyad mütləqdir (min. 3 simvol)"),
  email: z.email("Düzgün bir e-poçt ünvanı daxil edin"),
  phone: z.string().min(9, "Telefon nömrəsi çox qısadır").regex(/^\+994 (50|51|55|60|70|77|99) \d{3} \d{2} \d{2}$/, "Düzgün bir telefon nömrəsi daxil edin"),
  cv: z
    .custom<FileList>()
    .refine((files) => files && files.length > 0, "CV faylı mütləqdir"),
  motivationLetter: z.string().min(10, "Motivasiya məktubu mütləqdir (min. 10 simvol)"),
});

export const formDataSchema = stepOneSchema.merge(stepTwoSchema);
export type FormData = z.infer<typeof formDataSchema>;