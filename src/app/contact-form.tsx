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

const formSchema = z.object({
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                  <Input placeholder="Dupont" {...field} />
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
                  <Input placeholder="Jean" {...field} />
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
                <FormLabel>Type d'objet</FormLabel>
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
        <div className="flex  sm:justify-end">
          <Button
            type="submit"
            className="py-6 w-full sm:w-max hover:bg-green-700 rounded-none"
            disabled={Object.keys(form.formState.errors).length > 0}
            // style={{
            //   backgroundColor:
            //     Object.keys(form.formState.errors).length > 0 ? "red" : "black",
            //   color: "white",
            // }}
          >
            Envoyer votre demande
          </Button>
        </div>
      </form>
    </Form>
  );
}
