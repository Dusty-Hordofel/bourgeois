"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

const people = [
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
  // {
  //   id: 6,
  //   name: "Dora",
  //   designation: "The Explorer",
  //   image:
  //     "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  // },
];

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Sparkles className="h-6 w-6" />
          <span className="ml-2 sm:text-xl lg:text-2xl font-bold">
            Bourgeois.P
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className=" text-xs sm:text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
            href="/"
          >
            Accueil
          </Link>
          <Link
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Services
          </Link>
          <Link
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
            href="/"
          >
            À propos
          </Link>
          <Link
            className="text-xs sm:text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="">
          {/* text-white */}
          <div className="flex bg-yellow-200 px-10 pb-10 pt-20">
            <h1 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex-1 uppercase">
              Bourgeois Propreté ,<br />
              <span className="text-green-600">
                l’excellence pour un <br />
                cadre de vie impeccable.
              </span>
              {/* l’excellence de la propreté, pour des espaces
            impeccables. */}
            </h1>
            {/* objectif est d’assurer la propreté et le confort de chaque espace
              que nous traitons. */}
            <div className="flex flex-col w-[35%] ">
              <p>
                Nous nous engageons à fournir des services de nettoyage de haute
                qualité adaptés à une variété de secteurs. Nous intervenons avec
                expertise dans le secteur médical, pour les professionnels, les
                environnements industriels, ainsi que pour les particuliers.
                Notre.
              </p>
              <div className="flex flex-row bg-gray-400 justify-end gap-x-14 pb-5 pt-10">
                <div
                  // className="flex flex-row items-center justify-center mb-10 w-full"
                  className="flex flex-row items-center justify-center"
                >
                  <AnimatedTooltip items={people} />
                </div>
                <div

                // className="z-10 flex min-h-[16rem] items-center justify-center"
                >
                  <ShimmerButton className="shadow-2xl flex gap-x-4">
                    <span className="whitespace-pre-wrap text-center text-sm leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg font-extralight">
                      Ils parlent de nous{" "}
                    </span>
                    <ArrowRight size={28} strokeWidth={0.75} />
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=""></div>
        <section className="relative h-[700px]">
          <Image
            src="https://res.cloudinary.com/dgsc66scx/image/upload/v1727386521/bourgeois/pexels-vlad-fonsark-2175898-5100851_myhlje.jpg"
            layout="fill"
            objectFit="cover"
            alt="image d'un nettoyage de vitre d'immeuble"
          />
        </section>

        <section>
          <div className="flex bg-yellow-200 px-10 pb-10 pt-16">
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex-1 uppercase bg-red-400 flex items-center">
              NOS SERVICES <br /> DE NETTOYAGE
            </h2>
            {/* objectif est d’assurer la propreté et le confort de chaque espace
              que nous traitons. */}
            <div className="w-[35%] ">
              <p className="bg-purple-400 h-full flex items-center">
                Nous proposons une large gamme de services de nettoyage pour les
                espaces résidentiels et commerciaux. Du nettoyage en profondeur
                à l'entretien régulier, nous veillons à ce que votre espace soit
                toujours propre et hygiénique.
              </p>
            </div>
          </div>
          {/* <div className="w-full h-full py-20"> */}
          {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
              Get to know your iSad.
            </h2> */}
          <Carousel items={cards} />
          {/* </div> */}
        </section>

        <section className="relative h-[500px]">
          <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex-1 uppercase flex items-center absolute z-50 left-10 top-10">
            NOS SOLUTIONS <br /> DE NETTOYAGE
          </h2>
          <p className="absolute z-50 left-10 bottom-10 w-[40%] ">
            Chez Bourgeois Propreté, nous sommes fiers d'utiliser des produits
            et des technologies de nettoyage de pointe pour garantir des
            services de première qualité à nos clients. Nous nous engageons à
            n'utiliser que les outils les plus récents et les plus avancés qui
            sont non seulement efficaces, mais aussi écologiques et sans danger
            pour votre famille et l'environnement.
          </p>
          <Image
            src="https://res.cloudinary.com/dgsc66scx/image/upload/v1727390595/bourgeois/cleaning-supply-flatlay-bottom_kruyo2.jpg"
            layout="fill"
            objectFit="cover"
            alt="image d'un nettoyage de vitre d'immeuble"
          />
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Nos services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1534350752840-1b1b71b4b4fe?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Icône de nettoyage de bureaux"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold">Nettoyage de bureaux</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  Entretien régulier pour des espaces de travail propres et
                  productifs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1669101602124-f5b78895d91c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Icône de nettoyage industriel"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold">Nettoyage industriel</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  Solutions de nettoyage adaptées aux environnements
                  industriels.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Icône de nettoyage spécialisé"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold">Nettoyage spécialisé</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-center">
                  Services sur mesure pour des besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Pourquoi nous choisir ?
            </h2> */}

            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex-1 uppercase flex items-center absolute z-50 left-10 top-10">
              Pourquoi nous choisir ?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1663047003710-59dca9550087?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image représentant le professionnalisme"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="font-bold">Professionnalisme</h3>
                <p className="text-sm text-gray-500 text-center">
                  Une équipe formée et expérimentée pour des résultats
                  impeccables.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src="https://images.unsplash.com/photo-1667559180631-e4d1c9164d88?q=80&w=2925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image représentant la flexibilité"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="font-bold">Flexibilité</h3>
                <p className="text-sm text-gray-500 text-center">
                  Des services adaptés à vos besoins et à votre emploi du temps.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src="https://images.unsplash.com/photo-1707044353662-bbce055f9ff1?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image représentant l'écologie"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="font-bold">Écologique</h3>
                <p className="text-sm text-gray-500 text-center">
                  Utilisation de produits respectueux de l&apos;environnement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Contactez-nous
            </h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="Nom" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Téléphone" type="tel" />
              <Textarea placeholder="Message" />
              <Button className="w-full">Envoyer</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Bourgeois.P. Tous droits réservés.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/">
            Mentions légales
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/">
            Politique de confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  );
}
