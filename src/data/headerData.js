import icon from "@/images/header-icon.png";
import logo2 from "@/images/logo-2.png";
import logo from "@/images/logo.png";

export const navItems = [
  {
    id: 1,
    name: "Accueil",
    href: "",
  },
  {
    id: 2,
    name: "L'association",
    href: "",
    subNavItems: [
      { id: 1, name: "Agenda", href: "/agenda" },
      { id: 2, name: "Bureau", href: "/bureau"},
      { id: 3, name: "IESF", href: "/iesf" },
      { id: 4, name: "Club A3IE", href: "/a3ie" },
    ],
  },
  {
    id: 3,
    name: "Carrière IIE",
    href: "",
    subNavItems: [
      { id: 1, name: "Service carrière & emploi", href: "/carriere" },
      { id: 2, name: "Enquêtes", href: "/enquetes" },
    ],
  },
  {
    id: 4,
    name: "L'école",
    href: "",
    subNavItems: [
      { id: 1, name: "L'école, les enseignements", href: "/enseignements" },
      { id: 2, name: "L'école en image", href: "/images" },
      { id: 3, name: "Verser la Taxe d'Apprentissage", href: "/taxe" },
      { id: 4, name: "Soutiens", href: "/soutiens" },
      { id: 5, name: "Taxe d'apprentissage", href: "/apprentissage" },
    ],
  },
  {
    id: 5,
    name: "Contacts",
    href: "",
    subNavItems: [
      { id: 1, name: "Nous contacter", href: "/contact" },
      { id: 2, name: "Délégués de promotion", href: "/promo" },
    ],
  },
  {
    id: 6,
    name: "Compte-rendus",
    href: "/compte-rendus",
  },
];

export const socials = [
  {
    id: 1,
    icon: "fa-brands fa-facebook",
    href: "#",
  },
];

const headerData = {
  logo,
  logo2,
  icon,
  navItems,
  email: "ca@a3ie.org",
  phone: "06 62 83 66 07",
  address: "1 Rue de la Résistance, 91000 Évry-Courcouronnes",
  socials,
};

export default headerData;
