import { Avatar, Footer, Header, Socials } from "components";
import { useTranslation } from "hooks";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Mitacho</title>
        <meta name="description" content="Desenvolvedor de Software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-[calc(100vh-10rem)] container px-4 mx-auto grid grid-rows-[1fr_3fr] lg:grid-rows-none lg:grid-cols-3 gap-4 items-center justify-center font-medium text-md text-neutral-900 dark:text-neutral-300">
        <h1 className="max-w-xs h-full text-center lg:text-start flex items-center">
          {t.hello}
        </h1>
        <div className="flex items-center justify-center h-full">
          <Avatar
            className="h-32 w-32 rounded-full animate-[floating_6s_ease-in-out_infinite]"
            src="https://avatars.githubusercontent.com/u/50084167?v=4"
            alt="GitHub profile picture"
            height="128px"
            width="128px"
          />
        </div>
        <Socials className="hidden lg:flex h-full" />
      </main>
      <Footer />
    </>
  );
};

export default Home;
