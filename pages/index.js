import Head from 'next/head'
import styles from './index.module.sass'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mindmetrics project
        </h1>
      </main>
    </div>
  )
}
