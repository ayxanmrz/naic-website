import News1 from "@/public/images/news/news-1.png";
import News2 from "@/public/images/news/news-2.png";
import News3 from "@/public/images/news/news-3.png";
import News4 from "@/public/images/news/news-4.png";

export interface NewsItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const news: NewsItem[] = [
  {
    title: "Stay updated with the newest developm...",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: News1.src,
    link: "#",
  },
  {
    title: "Discover innovative solutions for your proj...",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: News2.src,
    link: "#",
  },
  {
    title: "Improve productivity with cutting-edge tools.",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: News3.src,
    link: "#",
  },
  {
    title: "Enhance collaboration with team members.",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    image: News4.src,
    link: "#",
  },
];