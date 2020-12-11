import Head from 'next/head';
import { getDatabase } from '../db/mongodb';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href={'/favicon.ico'} />
      </Head>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur debitis
        delectus eaque eum id, impedit ipsam itaque iure natus nihil omnis, reiciendis similique sit
        voluptates! Amet illo omnis tempora!
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const db = await getDatabase();
  const collection = db.collection('items');
  const items = await collection.find({}).toArray();

  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
    revalidate: 30,
  };
}
