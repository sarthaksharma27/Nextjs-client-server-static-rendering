import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import { useSession, signIn, signOut } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className={styles.container}>
      {status === 'loading' && <p>Loading...</p>}
      {session && (
        <>
          <h1>Hello {session.user.name}</h1>
          <Image
            src="https://nextjs.org/static/blog/next-14/twitter-card.png"
            alt='loki image'
            width={800}
            height={400}
          />
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
      {!session && (
        <button onClick={() => signIn()}>Login</button>
      )}
    </div>
  );
}
