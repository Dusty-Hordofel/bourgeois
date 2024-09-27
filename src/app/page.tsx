"use client";
import Image from "next/image";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import ContactForm from "../components/form/contact-form";
import { data, peoples, competences } from "@/assets/data";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const router = useRouter();
  const section1Ref = useRef<HTMLInputElement | null>(null);
  const section3Ref = useRef<HTMLInputElement | null>(null);
  const section6Ref = useRef<HTMLInputElement | null>(null);

  const handleScrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="px-4 lg:px-6 h-14 flex justify-between">
          <Link className="flex items-center justify-center " href="/">
            <span className="ml-2 sm:text-xl lg:text-2xl font-bold">
              Bourgeois.P
            </span>
          </Link>
          <nav className="flex justify-end gap-x-4 sm:gap-x-8 items-center flex-1">
            <Link
              className="text-sm sm:text-base font-medium hover:underline underline-offset-4"
              href="#section3"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(section3Ref);
              }}
            >
              Services
            </Link>
            <Link
              className="text-sm sm:text-base font-medium hover:underline underline-offset-4"
              href="#section6"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection(section6Ref);
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="h-14"></div>
        <section className="">
          <div className="flex px-10 py-32">
            <h1 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex-1 uppercase">
              Bourgeois Propreté ,<br />
              <span className="text-green-700">
                l’excellence pour un <br />
                cadre de vie impeccable.
              </span>
            </h1>

            <div className=" flex-col w-[35%] hidden">
              <p>
                Nous nous engageons à fournir des services de nettoyage de haute
                qualité adaptés à une variété de secteurs. Nous intervenons avec
                expertise dans le secteur médical, pour les professionnels, les
                environnements industriels, ainsi que pour les particuliers.
                Notre.
              </p>
              <div className="flex flex-row bg-gray-400 justify-end gap-x-14 pb-5 pt-10">
                <div className="flex flex-row items-center justify-center">
                  <AnimatedTooltip items={peoples} />
                </div>
                <div>
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

        <section className="relative h-[700px]">
          <Image
            src="https://res.cloudinary.com/dgsc66scx/image/upload/v1727386521/bourgeois/pexels-vlad-fonsark-2175898-5100851_myhlje.jpg"
            layout="fill"
            objectFit="cover"
            alt="image d'un nettoyage de vitre d'immeuble"
          />
        </section>

        <section ref={section3Ref} id="section3">
          <div className="flex px-10 pb-10 pt-16">
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex-1 uppercase  flex items-center text-shadow ">
              NOS SERVICES <br /> DE NETTOYAGE
            </h2>
            <div className="hidden lg:block w-[35%] ">
              <p className="h-full flex items-center">
                Nous proposons une large gamme de services de nettoyage pour les
                espaces résidentiels et commerciaux. Du nettoyage en profondeur
                à l&apos;entretien régulier, nous veillons à ce que votre espace
                soit toujours propre et hygiénique.
              </p>
            </div>
          </div>

          <Carousel items={cards} />
        </section>

        <section className="relative h-96 lg:h-[600px]">
          <div className="px-10 pt-5 lg:pt-10 pb-10 absolute z-10 text-white  text-shadow space-y-2 sm:space-y-6 ">
            <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex-1 uppercase flex items-center ">
              NOS SOLUTIONS <br /> DE NETTOYAGE
            </h2>
            <p className="lg:w-[40%] ">
              Chez Bourgeois Propreté, nous sommes fiers d&apos;utiliser des
              produits et des technologies de nettoyage de pointe pour garantir
              des services de première qualité à nos clients. Nous nous
              engageons à n&apos;utiliser que les outils les plus récents et les
              plus avancés qui sont non seulement efficaces, mais aussi
              écologiques et sans danger pour votre famille et
              l&apos;environnement.
            </p>
          </div>
          <Image
            src="https://res.cloudinary.com/dgsc66scx/image/upload/v1727434118/bourgeois/AnyConv.com__vecteezy_blue-cleaning-bucket-with-yellow-cleaning-supplies_46096376_k10x2r.webp"
            layout="fill"
            objectFit="cover"
            alt="image d'un nettoyage de vitre d'immeuble"
          />
        </section>

        <section>
          <div className="flex flex-col lg:flex-row px-10 pb-5 pt-20">
            <h2 className="text-[28px] font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex-1 uppercase flex items-center  text-shadow mb-10">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competences.map(({ src, title, description }, index) => (
              <div key={index} className="relative aspect-square">
                <div className="absolute z-10 text-white p-10 text-shadow">
                  <h3 className=" text-white text-sm md:text-xl font-medium font-sans text-left">
                    {title}
                  </h3>
                  <p className=" text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2 ">
                    {description}
                  </p>
                </div>
                <Image
                  src={src}
                  alt="image d'un nettoyage de vitre d'immeuble"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
            ))}
          </div>
        </section>

        <section
          className="bg-gray-100 flex px-10 py-20 flex-col"
          ref={section6Ref}
          id="section6"
        >
          <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none flex-1 uppercase">
            <span className="text-green-700">REMPLISSEZ LE FORMULAIRE</span> ET
            <br /> NOUS VOUS CONTACTERONS
          </h2>
          <div className=" flex justify-center items-center">
            <div className="py-20 w-full sm:w-[75%]">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-black text-white">
        <p className="text-xs ">
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
