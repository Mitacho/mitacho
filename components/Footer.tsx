import Link from "next/link";
import { useTranslation } from "../hooks";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="container mx-auto px-4 font-medium text-sm text-neutral-900 dark:text-neutral-300 bg-amber-50 dark:bg-[#111111]">
      <nav>
        <ul className="h-20 flex items-center justify-between">
          <li>
            <a
              href="https://gonew.co"
              title={t["working-title"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.working}
            </a>
          </li>
          <li className="block lg:hidden">
            <Link href="/say-hi">
              <a title={t["say-hi-title"]}>{t["say-hi"]}</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Mitacho">
              <a title={t["projects-title"]}>{t.projects}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
