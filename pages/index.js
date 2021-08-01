import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/about">About</Link>
    </div>
  );
}

Home.getLayout = (page) => <Layout>{page}</Layout>;
