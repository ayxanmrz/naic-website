import {
  Book,
  Lightbulb,
  Rocket,
  SparklesIcon,
  Users,
  LucideIcon,
} from "lucide-react";

export interface Card<T = LucideIcon | string> {
  title: string;
  description: string;
  image: T;
}

export const aiLabCards: Card<string>[] = [
  {
    title: "Süni İntellekt tədqiqatları",
    description:
      "Süni intellekt alqoritmləri, maşın öyrənməsi və təbii dil emalı üzrə qabaqcıl tədqiqatlar aparırıq.",
    image: "/images/ai-lab-sayt.svg",
  },
  {
    title: "Süni intellekt əsaslı layihələr",
    description:
      "Süni intellekt əsaslı layihələrin yaradılması və inkişafını təmin edirik.",
    image: "/images/ai-lab-sayt2.svg",
  },
  {
    title: "Süni İntellekt tədris proqramı",
    description:
      "Süni intellektin dərinliklərinə qədər anlayışları özündə birləşdirən tədris proqramları təklif edir, kadrlar yetişdiririk.",
    image: "/images/ai-lab-sayt3.svg",
  },
];

export const valuesCards: Card[] = [
  {
    title: "İnnovasiya",
    description: "Dövrün sərhədlərini aşır, yeni ideyalar təqdim edirik.",
    image: Lightbulb,
  },
  {
    title: "Sürət",
    description: "Qətiyyətlə hərəkət edir, sürətlə inkişaf edirik.",
    image: Rocket,
  },
  {
    title: "Daimi öyrənmə",
    description: "Öyrənir, yaradır və bunu davamlı olaraq təkrarlayırıq",
    image: Book,
  },
  {
    title: "Komanda işi",
    description: "Birgə çalışır və hər zaman bir-birimizə hörmətlə yanaşırıq.",
    image: Users,
  },
  {
    title: "Təsir",
    description:
      "Uğurlu nəticələr əldə edir və müasir gələcəyə təsir göstəririk.",
    image: SparklesIcon,
  },
];
