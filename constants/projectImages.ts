import AcademyImage from "@/public/images/projects/academy.png";
import DataraceImage from "@/public/images/projects/datarace.png";
import LegalensImage from "@/public/images/projects/legalens.png";
import NeyronImage from "@/public/images/projects/neyron.png";
import AcademyLogo from "@/public/images/projects/logo/academy.svg";
import DataraceLogo from "@/public/images/projects/logo/datarace.svg";
import LegalensLogo from "@/public/images/projects/logo/legalens.svg";
import NeyronLogo from "@/public/images/projects/logo/neyron.svg";

interface ProjectImages{
  image: string;
  logo: string;
}


interface Project {
  [key: string]: ProjectImages;
}

export const projectImages: Project = {
  academy: {
    image: AcademyImage.src,
    logo: AcademyLogo.src,
  },
  datarace: {
    image: DataraceImage.src,
    logo: DataraceLogo.src,
  },
  legalens: {
    image: LegalensImage.src,
    logo: LegalensLogo.src,
  },
  neyron: {
    image: NeyronImage.src,
    logo: NeyronLogo.src,
  },
};