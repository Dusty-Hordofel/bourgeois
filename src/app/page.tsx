import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black relative">
          <Image
            src="https://images.unsplash.com/photo-1708201229016-881f2f045ab8?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image de fond représentant un bureau propre"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Nettoyage professionnel pour votre entreprise
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Des locaux impeccables pour une image irréprochable. Découvrez
                  nos services de nettoyage sur mesure.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Obtenir un devis</Button>
                <Button variant="outline">Nos services</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
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
