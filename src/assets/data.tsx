import DummyContent from "@/components/dynamic-content";

const peoples = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
];

const data = [
  {
    category: "Professionnels",
    title: "bureaux, locaux commerciaux",
    src: "https://res.cloudinary.com/dgsc66scx/image/upload/v1727386522/bourgeois/pexels-mastercowley-634007_cno6us.jpg",
    content: <DummyContent />,
  },
  {
    category: "Industriels",
    title: "entrepôts, usines",
    src: "https://res.cloudinary.com/dgsc66scx/image/upload/v1727386519/bourgeois/pexels-pixabay-209230_audz9g.jpg",
    content: <DummyContent />,
  },
  {
    category: "Secteur médical ",
    title: "hôpitaux, cliniques, laboratoires",
    src: "https://res.cloudinary.com/dgsc66scx/image/upload/v1727390596/bourgeois/cleaning-supply-bucket-over-grey_mbhg0r.jpg",
    content: <DummyContent />,
  },

  {
    category: "Particuliers",
    title: "maisons, appartements",
    src: "https://res.cloudinary.com/dgsc66scx/image/upload/v1727386521/bourgeois/pexels-falling4utah-2724749_ojnyv4.jpg",
    content: <DummyContent />,
  },
  // {
  //   category: "iOS",
  //   title: "Photography just got better.",
  //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
  // {
  //   category: "Hiring",
  //   title: "Hiring for a Staff Software Engineer",
  //   src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
];
const competences = [
  {
    title: "Professionnalisme",
    description:
      "Une équipe formée et expérimentée pour des résultats impeccables.",
    src: "https://res.cloudinary.com/dgsc66scx/image/upload/v1727386521/bourgeois/pexels-mastercowley-713297_hfl4hf.jpg",
  },
  {
    title: "Flexibilité",
    description:
      "Des services adaptés à vos besoins et à votre emploi du temps.",
    src: "https://res.cloudinary.com/dgsc66scx/image/upload/v1727386518/bourgeois/pexels-tima-miroshnichenko-6195117_czs50u.jpg",
  },
  {
    title: "Écologique",
    description: "Utilisation de produits respectueux de l'environnement.",
    src: "https://res.cloudinary.com/dgsc66scx/image/upload/v1727386518/bourgeois/pexels-antonio-lorenzana-bermejo-353570724-14965464_mhsweb.jpg",
  },
];

export { peoples, data, competences };
