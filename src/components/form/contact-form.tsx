"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { sendRequestEmail } from "@/actions/request-email.action";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  phone: z.string().regex(/^(\+33|0)[1-9](\d{2}){4}$/, {
    message: "Veuillez entrer un numéro de téléphone français valide.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  objectType: z.string().min(1, {
    message: "Veuillez sélectionner un type d'objet.",
  }),
  workType: z.string().min(1, {
    message: "Veuillez sélectionner un type de travail.",
  }),
});

const objectTypes = [
  "Maisons",
  "Appartements",
  "Chalets",
  "Bureaux",
  "Locaux commerciaux",
  "Entrepôts",
  "Usines",
  "Hôpitaux",
  "Cliniques",
  "Laboratoires",
  "Espaces événementiels",
  "Hôtels",
  "Écoles et universités",
  "Restaurants",
  "Magasins de détail",
];

const workTypes = [
  "Nettoyage complet après travaux",
  "Nettoyage régulier (quotidien, hebdomadaire, mensuel)",
  "Nettoyage de vitres et surfaces vitrées",
  "Désinfection des espaces de travail",
  "Nettoyage de fin de bail",
  "Entretien des sols (carrelage, moquette, parquet)",
  "Nettoyage industriel",
  "Nettoyage des espaces de santé (hôpitaux, cliniques)",
  "Nettoyage après événement",
  "Entretien des parties communes d'immeubles",
  "Nettoyage de façades",
  "Gestion des déchets",
  "Traitement anti-acariens et allergies",
  "Nettoyage et désinfection de cuisines industrielles",
  "Débarras et nettoyage de caves ou greniers",
  "Nettoyage de véhicules professionnels (flottes d'entreprise)",
];

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      objectType: "",
      workType: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const response = await sendRequestEmail(values);

    if (!response.error) {
      toast({
        title: "Excellente nouvelle 🤩",
        description: "Votre demande a été envoyée avec succès 🎉",
      });

      setIsLoading(false);

      form.reset();
    } else {
      toast({
        title: "Quelque chose s'est mal passé 🔥",
        description:
          "Votre demande n'a pas pu être envoyé pour des raisons techniques⚠️",
      });
      setIsLoading(false);
    }
  }

  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Dupont"
                    {...field}
                    className="text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Jean" {...field} className="text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numéro de téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="0612345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="jean.dupont@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="objectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type d&apos;objet</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un type d'objet" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {objectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de travail</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un type de travail" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {workTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex  sm:justify-end ">
          <Button
            type="submit"
            className="py-6 w-full sm:w-max hover:bg-green-700 rounded-none relative"
            disabled={Object.keys(form.formState.errors).length > 0}
            // style={{
            //   backgroundColor:
            //     Object.keys(form.formState.errors).length > 0 ? "red" : "black",
            //   color: "white",
            // }}
          >
            {isLoading && (
              <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <LoaderCircle color="#ffffff" className="animate-spin" />
              </div>
            )}
            <span className={`${isLoading && "invisible"}`}>
              Envoyer votre demande
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
