import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        src="https://nextjs.org/static/blog/next-14/twitter-card.png"
        alt='loki image'
        width={800}
        height={400}
      />
    </div>
  );
}
