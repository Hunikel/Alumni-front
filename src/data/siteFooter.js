import bg from "@/images/footer-bg.jpg";
import shape from "@/images/footer-shape.png";
import logo from "@/images/logo-2.png";

export const socials2 = [
  {
    id: 1,
    icon: "fa-brands fa-facebook",
    href: "#",
  },
];

const footerData = {
  logo,
  bg,
  socials: socials2,
  text: "Lorem quas utamur delicata qui, vix ei prima mentitum omnesque. Duo corrumpit cotidieque ne.",
  text2:
    "Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et événements. Vous pouvez vous désinscrire à tout moment et promis, vous ne recevrez pas de spam !",
  shape,
  links: [
    {
      id: 1,
      text: "ENSIIE",
      href: "https://www.ensiie.fr/",
    },
    {
      id: 2,
      text: "IESF",
      href: "https://www.iesf.fr/",
    },
    {
      id: 3,
      text: "Portail des élèves",
      href: "https://www.iiens.net/",
    },
    {
      id: 4,
      text: "Dièse (Junior Entreprise)",
      href: "https://www.diese.org/",
    },
    {
      id: 5,
      text: "Horizons Informatique (forum des entreprises)",
      href: "https://www.horizons-informatiques.fr/",
    },
  ],
  author: "Santo",
  year: new Date().getFullYear(),
};

export default footerData;
