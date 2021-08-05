import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className={styles.container}></main>
    </div>
  );
}

Home.getLayout = function displayLayout(page) {
  return <Layout>{page}</Layout>;
};
