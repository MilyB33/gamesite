import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return <main className={styles.container}></main>;
}

Home.getLayout = (page) => <Layout>{page}</Layout>;
