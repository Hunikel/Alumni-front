import author from "@/images/author.jpg";
import image from "@/images/blog-details-thumb.jpg";
import { socials } from "./headerData";
import alumni_1 from "@/images/mardi_alumni.jpg"
import dotation from "@/images/impulsion.jpg"
import metiers from "@/images/metiers.jpeg";
export const newsArea = {
  title: "News & Articles",
  newses: [
    {
      id: 1,
      image: alumni_1,
      category: "Evenement",
      date: "7 Février",
      title: "Mardi Alumni",
      localization:"Demory Paris au 62 R. Quincampoix, 75004 Paris"
    },
    {
      id: 2,
      image: dotation,
      category: "Article",
      date: "2023",
      title: "Fonds de dotation",
      localization:"1 Square de la résistance, 91000 - Evry"
    },
    {
      id: 3,
      image: metiers,
      category: "Evenement",
      date: "1er Février",
      title: "Soirée métiers",
      localization:"1 Square de la résistance, 91000 - Evry"
    },
  ],
};

export const blogDetailsMain = {
  image,
  date: "3 April, 2022",
  admin: "admin",
  comments: 2,
  title: "A day in the life of entrepreneur & co-founders",
  text1:
    "Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the is industrys. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  text2:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  tags: ["Construction", "Build", "Factory"],
  socials: socials,
};

export const blogAuthor = {
  image: author,
  name: "Christine Eve",
  text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus.",
};

export const blogDetailsSidebar = {
  categories: [
    "Business",
    "Coworking",
    "Freelancers",
    "Creative people",
    "Technology",
    "Startups",
  ],
  tags: [
    "Coworking",
    "Business",
    "Virtual office",
    "Private office",
    "Cabin",
    "Creatives",
    "Office suites",
  ],
  posts: [
    {
      id: 1,
      image: "post-1.jpg",
      title: "A day in the life of entrepreneur & co-founder",
    },
    {
      id: 2,
      image: "post-2.jpg",
      title: "A day in the life of entrepreneur & co-founder",
    },
    {
      id: 3,
      image: "post-3.jpg",
      title: "A day in the life of entrepreneur & co-founder",
    },
  ],
};
