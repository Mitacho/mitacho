import { useRouter } from "next/router";
import locales from "../locales";

export function useTranslation() {
  const router = useRouter();
  const { locale } = router;
  const t = locales[(locale as keyof typeof locales) || "pt-BR"];

  return {
    t,
  };
}
