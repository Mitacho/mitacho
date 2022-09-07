import { en } from "./en";
import { ptBr } from "./pt-BR";
import { Dictionary, Locale } from "./types";

const locales: Record<Locale, Dictionary> = {
  en,
  "pt-BR": ptBr,
};

export default locales;
