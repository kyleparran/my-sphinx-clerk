import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <>
      <Head>
        <title>My Sphinx-Clerk Site</title>
        <meta name="description" content="Protected by Clerk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to My Sphinx-Clerk Site</h1>

        {isSignedIn ? (
          <>
            <UserButton afterSignOutUrl="/" />
            <p>You are signed in.</p>
            <Link href="/docs">
              Go to Sphinx Docs
            </Link>
          </>
        ) : (
          <>
            <p>You are not signed in.</p>
            <SignInButton />
          </>
        )}
      </main>
    </>
  );
}

