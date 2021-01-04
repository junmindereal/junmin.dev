import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Junmin De Real - Developer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <a href='mailto:junmindereal@gmail.com'>junmindereal@gmail.com</a>
      </main>
    </div>
  )
}
