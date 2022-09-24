import { useTranslation } from "hooks";
import Link from "next/link";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="container mx-auto px-4 font-medium text-sm text-neutral-900 dark:text-neutral-300 bg-white dark:bg-[#111111]">
      <nav>
        <ul className="h-20 flex items-center justify-between">
          <li>
            <Link href="/">
              <a title={t["home-title"]}>{t.home}</a>
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href="/say-hi">
              <a title={t["say-hi-title"]}>{t["say-hi"]}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
