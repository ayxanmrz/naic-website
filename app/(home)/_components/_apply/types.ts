import { z } from "zod";
import { formDataSchema } from "./schema";
import { UseFormRegister} from "react-hook-form";

export type FormData = z.infer<typeof formDataSchema>;

export interface StepProps {
  register: UseFormRegister<FormData>; 
  errors: any;
}